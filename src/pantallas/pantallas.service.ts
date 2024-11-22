// Importar decoradores y utilidades necesarios de NestJS y Mongoose
import { Injectable } from '@nestjs/common'; // Permite que esta clase sea inyectable como servicio en otros módulos.
import { InjectModel } from '@nestjs/mongoose'; // Decorador para inyectar un modelo de Mongoose.
import { Model } from 'mongoose'; // Tipo genérico para interactuar con los modelos de Mongoose.
import { CreatePantallaDto } from './dto/create-pantalla.dto'; // DTO para validar y transferir datos al crear una pantalla.
import { UpdatePantallaDto } from './dto/update-pantalla.dto'; // DTO para validar y transferir datos al actualizar una pantalla.
import { Pantalla } from './schemas/pantallas.schema'; // Esquema Mongoose que define la estructura de los documentos de la colección `pantallas`.

@Injectable() // Marca esta clase como un servicio que puede ser inyectado por el sistema de dependencias de NestJS.
export class PantallasService {
  // Constructor que inyecta el modelo de Mongoose asociado al esquema `Pantalla`.
  constructor(
    @InjectModel(Pantalla.name) private pantallaModel: Model<Pantalla>, // `pantallaModel` es una instancia del modelo Mongoose para la colección `pantallas`.
  ) {}

  // Método para crear una nueva pantalla en la base de datos
  create(createPantallaDto: CreatePantallaDto) {
    const createdPantalla = new this.pantallaModel(createPantallaDto); // Crear un nuevo documento basado en el DTO.
    return createdPantalla.save(); // Guardar el documento en la base de datos y devolverlo.
  }

  // Método para obtener todas las pantallas
  async findAll() {
    try {
      return await this.pantallaModel.find().exec(); // Realizar una consulta para obtener todos los documentos de la colección `pantallas`.
    } catch (e) {
      console.error(e); // Registrar el error en la consola.
      throw new Error('Error al obtener todas las pantallas.'); // Lanzar un error para manejarlo a nivel superior.
    } finally {
      console.log('Operación findAll finalizada.'); // Mensaje de registro al completar la operación.
    }
  }
  
  // Método para obtener una pantalla específica por su ID
  async findOne(id: string) {
    try {
      const pantalla = await this.pantallaModel.findOne({ id: Number(id) }).exec(); // Buscar un documento cuyo campo `id` coincida con el valor proporcionado.
      if (!pantalla) { // Verificar si no se encontró la pantalla.
        throw new Error('Pantalla no encontrada.'); // Lanzar un error si no existe.
      }
      return pantalla; // Devolver el documento encontrado.
    } catch (e) {
      console.error(e); // Registrar el error en la consola.
      throw new Error(`Error al obtener la pantalla con ID: ${id}`); // Lanzar un error específico.
    } finally {
      console.log('Operación findOne para pantallas finalizada.'); // Mensaje de registro al completar la operación.
    }
  }
  
  // Método para actualizar una pantalla específica
  async update(id: string, updatePantallaDto: UpdatePantallaDto) {
    try {
      const updatedPantalla = await this.pantallaModel.findByIdAndUpdate(
        id, // El ID del documento que se desea actualizar.
        updatePantallaDto, // Los datos actualizados que se aplicarán.
        { new: true }, // Opción para devolver el documento actualizado en lugar del anterior.
      ).exec(); // Ejecutar la operación de actualización.
      return updatedPantalla; // Devolver el documento actualizado.
    } catch (e) {
      console.error(e); // Registrar el error en la consola.
      throw new Error(`Error al actualizar la pantalla con ID: ${id}`); // Lanzar un error específico.
    } finally {
      console.log('Actualización finalizada.'); // Mensaje de registro al completar la operación.
    }
  }
  
  // Método para eliminar una pantalla específica por su ID
  async remove(id: string) {
    try {
      return await this.pantallaModel.findByIdAndDelete(id).exec(); // Ejecutar la operación para eliminar el documento por su ID.
    } catch (e) {
      console.error(e); // Registrar el error en la consola.
      throw new Error(`Error al eliminar la pantalla con ID: ${id}`); // Lanzar un error específico.
    } finally {
      console.log('Eliminación finalizada.'); // Mensaje de registro al completar la operación.
    }
  }
}
