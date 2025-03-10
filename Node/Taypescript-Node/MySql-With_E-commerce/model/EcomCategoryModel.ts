import { Table, Column, Model, DataType } from "sequelize-typescript";


@Table({
    timestamps: true,
    tableName: "category"
})

export class EcomCategory extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    category_Name!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    category_description!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    category_logo!: string
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    isActive!: boolean;
}

