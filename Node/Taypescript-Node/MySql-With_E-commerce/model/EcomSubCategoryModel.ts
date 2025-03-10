import { Table, Column, DataType, Model, AllowNull } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "SubCategory"
})

export class EcomSubCategory extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    category_id!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description!: string
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    logo!: string
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    isActive!: boolean
}