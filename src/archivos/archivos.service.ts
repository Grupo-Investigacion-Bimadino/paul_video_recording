// Importaciones necesarias para construir el servicio
import { Injectable } from '@nestjs/common'; // Decorador para marcar esta clase como un servicio inyectable.
import { InjectModel } from '@nestjs/mongoose'; // Decorador para inyectar modelos de Mongoose.
import { Model } from 'mongoose'; // Clase base para trabajar con modelos de Mongoose.
import { CreateArchivoDto } from './dto/create-archivo.dto'; // DTO para validar los datos al crear un archivo.
import { UpdateArchivoDto } from './dto/update-archivo.dto'; // DTO para validar los datos al actualizar un archivo.
import { Archivo } from './schemas/archivos.schemas'; // Esquema de Mongoose que representa la estructura de los documentos en la colección `archivos`.

@Injectable() // Decorador que convierte esta clase en un servicio inyectable.
export class ArchivosService {
  // Constructor para inyectar el modelo de Mongoose asociado a `Archivo`.
  constructor(
    @InjectModel(Archivo.name) private archivoModel: Model<Archivo>, // `archivoModel` se usa para interactuar con la colección `archivos`.
  ) {}

  // Método para crear un nuevo archivo en la base de datos.
  create(createArchivoDto: CreateArchivoDto) {
    const createdArchivo = new this.archivoModel(createArchivoDto); // Crear una nueva instancia del modelo con los datos proporcionados.
    return createdArchivo.save(); // Guardar el nuevo documento en la base de datos.
  }

  // Método para obtener todos los documentos de la colección `archivos`.
  async findAll() {
    try {
      return await this.archivoModel.find().exec(); // Realizar una consulta para obtener todos los documentos.
    } catch (e) {
      console.error(e); // Registrar cualquier error en la consola.
      throw new Error('Error al obtener todos los archivos.'); // Lanzar un error específico.
    } finally {
      console.log('Operación findAll finalizada.'); // Mensaje de registro indicando que la operación se completó.
    }
  }

  // Método para buscar un archivo específico por su ID.
  async findOne(id: string) {
    try {
      const archivo = await this.archivoModel.findOne({ id: Number(id) }).exec(); // Buscar el documento cuyo campo `id` coincide con el valor proporcionado.
      if (!archivo) { // Verificar si el archivo no existe.
        throw new Error('Archivo no encontrado.'); // Lanzar un error si no se encuentra.
      }
      return archivo; // Devolver el documento encontrado.
    } catch (e) {
      console.error(e); // Registrar el error en la consola.
      throw new Error(`Error al obtener el archivo con ID: ${id}`); // Lanzar un error con un mensaje más específico.
    } finally {
      console.log('Operación findOne finalizada.'); // Mensaje indicando que la operación terminó.
    }
  }

  // Método para actualizar un archivo específico por su ID.
  async update(id: string, updateArchivoDto: UpdateArchivoDto) {
    try {
      const updatedArchivo = await this.archivoModel.findByIdAndUpdate(
        id, // ID del archivo que se quiere actualizar.
        updateArchivoDto, // Datos validados que se usarán para la actualización.
        { new: true }, // Opción para devolver el documento actualizado en lugar del anterior.
      ).exec(); // Ejecutar la operación de actualización.
      return updatedArchivo; // Devolver el documento actualizado.
    } catch (e) {
      console.error(e); // Registrar cualquier error.
      throw new Error(`Error al actualizar el archivo con ID: ${id}`); // Lanzar un error específico.
    } finally {
      console.log('Actualización finalizada.'); // Mensaje de registro indicando que la operación terminó.
    }
  }

  // Método para eliminar un archivo específico por su ID.
  async remove(id: string) {
    try {
      return await this.archivoModel.findByIdAndDelete(id).exec(); // Eliminar el documento por su ID.
    } catch (e) {
      console.error(e); // Registrar el error en la consola.
      throw new Error(`Error al eliminar el archivo con ID: ${id}`); // Lanzar un error con un mensaje más específico.
    } finally {
      console.log('Eliminación finalizada.'); // Mensaje indicando que la operación terminó.
    }
  }
}
