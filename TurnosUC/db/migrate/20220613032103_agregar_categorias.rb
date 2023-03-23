class AgregarCategorias < ActiveRecord::Migration[6.0]
  Category.create(name: "Ida")
  Category.create(name: "Vuelta")
end
