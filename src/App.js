import * as C from './styles'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import api from './services/api'

const App = () => {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearchCep() {
    if (input === '') {
      alert("Preencha algum cep..")
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      for (let i in response.data) {
        if (response.data[i] !== '') {
          setCep(response.data)
          setInput('')
        }
        else {
          response.data[i] = 'Não encontrado'
          setCep(response.data[i])
          setInput('')
        }
      }
    }
    catch {
      alert('Ops, erro ao buscar...')
      setInput('')
    }

  }

  return (
    <C.Container>
      
      <C.ContainerTitle className="title">
        Buscador de CEP
      </C.ContainerTitle>
      
      <C.ContainerInput>
        <input type="text"
          placeholder="Digite aqui o CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <FiSearch onClick={handleSearchCep} className="buttonSearch" size={20} color="FFF" />
      </C.ContainerInput>

      {Object.keys(cep).length > 0 && (
        <C.MainArea>
          <h2>Cep: {cep.cep}</h2>
          <p>Rua: {cep.logradouro}</p>
          <p>Complemento: {cep.complemento}</p>
          <p>Bairro: {cep.bairro}</p>
          <p>{cep.localidade} - {cep.uf}</p>
        </C.MainArea>
      )}
    </C.Container>
  )
}

export default App