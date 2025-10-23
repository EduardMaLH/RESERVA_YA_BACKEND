const supabase = require('../config/supabaseClient');

class UserModel {
  async getAllUsers() {
    const { data, error } = await supabase
      .from('usuarios')
      .select('*');

    if (error) throw error;
    return data;
  }

  async getUserById(id) {
    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }

  async createUser(userData) {
    const { data, error } = await supabase
      .from('usuarios')
      .insert([userData])
      .select();

    if (error) throw error;
    return data[0];
  }

  async updateUser(id, userData) {
    const { data, error } = await supabase
      .from('usuarios')
      .update(userData)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data[0];
  }

  async deleteUser(id) {
    const { error } = await supabase
      .from('usuarios')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  }
}

module.exports = new UserModel();