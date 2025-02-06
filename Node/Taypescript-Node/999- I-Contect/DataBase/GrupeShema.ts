import mongoose from 'mongoose'
import { IGrupe } from '../model/IGroup'

const GrupeShema = new mongoose.Schema<IGrupe>(
    {
        name: {
            type: String, required: true, unique: true
        }
    },
    {
        timestamps: true
    }
)

const groupTables = mongoose.model<IGrupe>('grupe', GrupeShema)

export default groupTables;