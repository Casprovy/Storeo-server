import CONSTANTS from '../_CONSTANTS';

const QUERIES = {
  insertIntoProducts: `INSERT INTO products
            (  name,  description,  price,  vat_rate,  discount,  tags,  images,  category_id)
      VALUES( :name, :description, :price, ${CONSTANTS.vatRate}, :discount, :tags, :images, :category_id)
      `,
  insertIntoProductProperties: `INSERT INTO product_properties
            (category_id, property_name, units, property_value, product_id)
    VALUES ( :category_id, :property_name, :units, :property_value, :productId)
  `,
  updateProduct: `UPDATE products SET name = :name,
                  description = :description,
                  price = :price,
                  vat_rate = ${CONSTANTS.vatRate},
                  discount = :discount,
                  tags = :tags,
                  images = :images,
                  category_id = :category_id
                  WHERE id = :productId;`,
  getCategoryPropertyName: 'SELECT * from category_properties where category_id = :category_id',

  updateProductProperties: `UPDATE product_properties SET
                            category_id = :category_id,
                            property_name = :property_name,
                            units = :units,
                            property_value = :property_value
                            WHERE product_id = :productId;`,
  updateProductProperty: `UPDATE product_properties SET
                          property_value = :property_value
                          WHERE product_id = :productId
                          AND category_id = :category_id
                          AND property_name = :property_name`,
  deleteProductProperties: 'DELETE FROM product_properties WHERE product_id = :productId',
  deleteProductById: 'DELETE FROM products WHERE id = :productId',
  deleteCategoryById: `DELETE FROM categories
                        WHERE id = :id`,

  updateCategory: 'UPDATE categories SET name = :name WHERE id = :id',
};

export default QUERIES;
