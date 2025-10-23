import { supabase } from '../config/supabaseClient.js';

export class UsuarioModel {
  async getAll() {
    const { data, error } = await supabase
      .from('usuario')
      .select('*');
    if (error) throw error;
    return data;
  }

  async getById(id) {
    const { data, error } = await supabase
      .from('usuario')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  }

  async create(userData) {
    const { data, error } = await supabase
      .from('usuario')
      .insert([userData])
      .select();
    if (error) throw error;
    return data[0];
  }

  async update(id, userData) {
    const { data, error } = await supabase
      .from('usuario')
      .update(userData)
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0];
  }

  async delete(id) {
    const { error } = await supabase
      .from('usuario')
      .delete()
      .eq('id', id);
    if (error) throw error;
    return true;
  }
}

export default new UsuarioModel();