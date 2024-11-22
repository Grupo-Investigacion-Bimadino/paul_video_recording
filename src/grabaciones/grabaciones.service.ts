// Importar los decoradores y utilidades necesarios de NestJS y Mongoose
import { Injectable } from '@nestjs/common'; // Hacer que esta clase sea un servicio inyectable en otros módulos.
import { InjectModel } from '@nestjs/mongoose'; // Decorador para inyectar el modelo de Mongoose en el servicio.
import { Model } from 'mongoose'; // Tipo genérico para interactuar con los modelos de Mongoose.
import { CreateGrabacioneDto } from './dto/create-grabacione.dto'; // DTO para validar y transferir datos al crear una grabación.
import { UpdateGrabacioneDto } from './dto/update-grabacione.dto'; // DTO para validar y transferir datos al actualizar una grabación.
import { Grabacion } from './schemas/grabaciones.schema'; // Esquema de Mongoose que define la estructura de los documentos en la colección `grabaciones`.

@Injectable() // Marca esta clase como un servicio inyectable por el sistema de NestJS.
export class GrabacionesService {
  // Constructor que inyecta el modelo de Mongoose asociado al esquema `Grabacion`.
  constructor(
    @InjectModel(Grabacion.name) private grabacionModel: Model<Grabacion>, // `grabacionModel` es una instancia del modelo Mongoose para `grabaciones`.
  ) {}

  // Método para crear una nueva grabación en la base de datos
  create(createGrabacioneDto: CreateGrabacioneDto) {
    const createdGrabacion = new this.grabacionModel(createGrabacioneDto); // Crear una nueva instancia del documento basada en el DTO de creación.
    return createdGrabacion.save(); // Guardar el documento en la base de datos y devolverlo.
  }

  // Método para obtener todas las grabaciones de la colección
  async findAll() {
    try {
      return await this.grabacionModel.find().exec(); // Realizar una consulta para obtener todos los documentos en la colección `grabaciones`.
    } catch (e) {
      console.error(e); // Registrar cualquier error que ocurra en la consola.
      throw new Error('Error al obtener todas las grabaciones.'); // Lanzar un error para manejarlo en niveles superiores.
    } finally {
      console.log('Operación findAll finalizada.'); // Mensaje de registro indicando que la operación se completó.
    }
  }
  
  // Método para obtener una grabación específica por su ID
  async findOne(id: string) {
    try {
      // Intentar buscar un documento cuyo campo `id` coincida con el valor proporcionado.
      const grabacion = await this.grabacionModel.findOne({ id: Number(id) }).exec();
      if (!grabacion) { // Si no se encuentra la grabación:
        throw new Error('Grabación no encontrada.'); // Lanzar un error indicando que no existe.
      }
      return grabacion; // Devolver el documento encontrado.
    } catch (e) {
      console.error(e); // Registrar el error en la consola.
      throw new Error(`Error al obtener la grabación con ID: ${id}`); // Lanzar un error específico para este caso.
    } finally {
      console.log('Operación findOne para grabaciones finalizada.'); // Mensaje indicando que la operación se completó.
    }
  }
  
  // Método para actualizar una grabación específica
  async update(id: string, updateGrabacioneDto: UpdateGrabacioneDto) {
    try {
      const updatedGrabacione = await this.grabacionModel.findByIdAndUpdate(
        id, // El ID del documento que se desea actualizar.
        updateGrabacioneDto, // Datos que se quieren actualizar, validados a través del DTO.
        { new: true }, // Opción para devolver el documento actualizado en lugar del anterior.
      ).exec(); // Ejecutar la operación de actualización.
      return updatedGrabacione; // Devolver el documento actualizado.
    } catch (e) {
      console.error(e); // Registrar cualquier error en la consola.
      throw new Error(`Error al actualizar la grabación con ID: ${id}`); // Lanzar un error específico para este caso.
    } finally {
      console.log('Actualización finalizada.'); // Mensaje indicando que la operación de actualización terminó.
    }
  }
  
  // Método para eliminar una grabación específica por su ID
  async remove(id: string) {
    try {
      return await this.grabacionModel.findByIdAndDelete(id).exec(); // Eliminar el documento de la colección por su ID.
    } catch (e) {
      console.error(e); // Registrar cualquier error en la consola.
      throw new Error(`Error al eliminar la grabación con ID: ${id}`); // Lanzar un error específico para este caso.
    } finally {
      console.log('Eliminación finalizada.'); // Mensaje indicando que la operación de eliminación terminó.
    }
  }
}
