// Importar los decoradores y utilidades necesarios de NestJS y Mongoose
import { Injectable } from '@nestjs/common'; // Hacer que esta clase sea un servicio inyectable en otros módulos.
import { InjectModel } from '@nestjs/mongoose'; // Decorador para inyectar el modelo de Mongoose en el servicio.
import { Model } from 'mongoose'; // Tipo genérico para interactuar con los modelos de Mongoose.
import { CreateAudioDto } from './dto/create-audio.dto'; // DTO para validar y transferir datos al crear un audio.
import { UpdateAudioDto } from './dto/update-audio.dto'; // DTO para validar y transferir datos al actualizar un audio.
import { Audio } from './schemas/audios.schema'; // Esquema de Mongoose que define la estructura de los documentos en la colección `audios`.

@Injectable() // Marca esta clase como un servicio inyectable por el sistema de NestJS.
export class AudiosService {
  // Constructor que inyecta el modelo de Mongoose asociado al esquema `Audio`.
  constructor(
    @InjectModel(Audio.name) private audioModel: Model<Audio>, // `audioModel` es una instancia del modelo Mongoose para `audios`.
  ) {}

  // Método para crear un nuevo audio en la base de datos
  create(createAudioDto: CreateAudioDto) {
    const createdAudio = new this.audioModel(createAudioDto); // Crear una nueva instancia del documento basada en el DTO de creación.
    return createdAudio.save(); // Guardar el documento en la base de datos y devolverlo.
  }

  // Método para obtener todos los audios de la colección
  async findAll() {
    try {
      return await this.audioModel.find().exec(); // Realizar una consulta para obtener todos los documentos en la colección `audios`.
    } catch (e) {
      console.error(e); // Registrar cualquier error que ocurra en la consola.
      throw new Error('Error al obtener todos los audios.'); // Lanzar un error para manejarlo en niveles superiores.
    } finally {
      console.log('Operación findAll finalizada.'); // Mensaje de registro indicando que la operación se completó.
    }
  }

  // Método para obtener un audio específico por su ID
  async findOne(id: string) {
    try {
      // Intentar buscar un documento cuyo campo `id` coincida con el valor proporcionado.
      const audio = await this.audioModel.findOne({ id: Number(id) }).exec();
      if (!audio) { // Si no se encuentra el audio:
        throw new Error('Audio no encontrado.'); // Lanzar un error indicando que no existe.
      }
      return audio; // Devolver el documento encontrado.
    } catch (e) {
      console.error(e); // Registrar el error en la consola.
      throw new Error(`Error al obtener el audio con ID: ${id}`); // Lanzar un error específico para este caso.
    } finally {
      console.log('Operación findOne para audios finalizada.'); // Mensaje indicando que la operación se completó.
    }
  }

  // Método para actualizar un audio específico
  async update(id: string, updateAudioDto: UpdateAudioDto) {
    try {
      const updatedAudio = await this.audioModel.findByIdAndUpdate(
        id, // El ID del documento que se desea actualizar.
        updateAudioDto, // Datos que se quieren actualizar, validados a través del DTO.
        { new: true }, // Opción para devolver el documento actualizado en lugar del anterior.
      ).exec(); // Ejecutar la operación de actualización.
      return updatedAudio; // Devolver el documento actualizado.
    } catch (e) {
      console.error(e); // Registrar cualquier error en la consola.
      throw new Error(`Error al actualizar el audio con ID: ${id}`); // Lanzar un error específico para este caso.
    } finally {
      console.log('Actualización finalizada.'); // Mensaje indicando que la operación de actualización terminó.
    }
  }

  // Método para eliminar un audio específico por su ID
  async remove(id: string) {
    try {
      return await this.audioModel.findByIdAndDelete(id).exec(); // Eliminar el documento de la colección por su ID.
    } catch (e) {
      console.error(e); // Registrar cualquier error en la consola.
      throw new Error(`Error al eliminar el audio con ID: ${id}`); // Lanzar un error específico para este caso.
    } finally {
      console.log('Eliminación finalizada.'); // Mensaje indicando que la operación de eliminación terminó.
    }
  }
}
