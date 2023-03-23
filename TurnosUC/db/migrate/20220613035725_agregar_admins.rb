class AgregarAdmins < ActiveRecord::Migration[6.0]
  Admin.create!(email: 'admin@whateveryouwantyoursitetobe.com', 
  password: 'SomePassword', password_confirmation: 'SomePassword')
end
