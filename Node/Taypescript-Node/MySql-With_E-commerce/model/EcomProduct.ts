import { Table, Column, Model, DataType, AllowNull } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "EcomProduct"
})

export class EcomProduct extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    SubCategory_id!: string
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    product_name!: string
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    product_description!: string
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    product_image!: string
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    product_images!: string
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    product_price!: string
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    product_brand!: string
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    product_quantity!: string
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    isActive!: boolean

}
