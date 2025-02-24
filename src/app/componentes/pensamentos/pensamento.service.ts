import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento) {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento) {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(id: number) {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number) {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

}
