package br.com.deliverstar.dao;

import br.com.deliverstar.model.Categoria;
import br.com.deliverstar.model.Despesa;

import java.util.List;
import java.util.Optional;

public interface IDespesaDAO {

    Despesa save(Despesa despesa);
    Despesa update(Despesa despesa);
    void delete(Long id);
    List<Despesa> findAll();
    Optional<Despesa> findById(Long id);
    List<Despesa> findBycategoria(Categoria categoria);
}
