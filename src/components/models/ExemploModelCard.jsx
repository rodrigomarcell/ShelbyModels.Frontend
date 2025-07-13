import React, { useState } from 'react';
import ModelCard from './ModelCard';

// Dados de exemplo para demonstrar o componente melhorado
const modelosExemplo = [
  {
    id: '1',
    nome: "Sofia Martinez",
    idade: 24,
    cidade: "New York",
    preco: 200,
    nota: 4.8,
    totalAvaliacoes: 156,
    online: true,
    verificado: true,
    ultimaAtividade: "Visto por último 2h atrás",
    descricao: "Modelo profissional especializada em fotografia fashion e comercial. Experiência internacional em campanhas de luxo.",
    imagemUrl: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destaque: true,
    badges: ["🔥 NOVA", "👑 VIP"]
  },
  {
    id: '2',
    nome: "Alexandre King",
    idade: 22,
    cidade: "Los Angeles",
    preco: 180,
    nota: 4.9,
    totalAvaliacoes: 89,
    online: false,
    verificado: true,
    ultimaAtividade: "Visto por último 2h atrás",
    descricao: "Especialista em runway e fitness modeling com portfólio diversificado.",
    imagemUrl: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destaque: false,
    badges: ["🎥 Vídeo novo"]
  },
  {
    id: '3',
    nome: "Luna Rivera",
    idade: 23,
    cidade: "Chicago",
    preco: 190,
    nota: 4.7,
    totalAvaliacoes: 127,
    online: false,
    verificado: false,
    ultimaAtividade: "Visto por último 5m atrás",
    descricao: "Modelo versátil com experiência em editorials e campanhas comerciais.",
    imagemUrl: "https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destaque: false,
    badges: ["💬 Responde rápido"]
  },
  {
    id: '4',
    nome: "Isabella Costa",
    idade: 26,
    cidade: "Miami",
    preco: 250,
    nota: 4.9,
    totalAvaliacoes: 203,
    online: true,
    verificado: true,
    ultimaAtividade: "Online agora",
    imagemUrl: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destaque: true,
    badges: ["👑 VIP", "🔥 NOVA", "💬 Responde rápido"]
  }
];

function ExemploModelCard() {
  const [favoritos, setFavoritos] = useState(new Set(['1', '4']));

  const toggleFavorito = (modeloId) => {
    const novosFavoritos = new Set(favoritos);
    if (novosFavoritos.has(modeloId)) {
      novosFavoritos.delete(modeloId);
    } else {
      novosFavoritos.add(modeloId);
    }
    setFavoritos(novosFavoritos);
  };

  return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem', 
        color: '#333',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        Componente ModelCard Melhorado
      </h1>
      
      <p style={{ 
        textAlign: 'center', 
        marginBottom: '3rem', 
        color: '#666',
        fontSize: '1.1rem'
      }}>
        Demonstração das novas funcionalidades: destaque premium, badges dinâmicos, layout reorganizado e mais informações.
      </p>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {modelosExemplo.map((modelo) => (
          <ModelCard
            key={modelo.id}
            model={{ id: modelo.id }}
            isFavorite={favoritos.has(modelo.id)}
            onToggleFavorite={toggleFavorito}
            nome={modelo.nome}
            idade={modelo.idade}
            cidade={modelo.cidade}
            preco={modelo.preco}
            nota={modelo.nota}
            totalAvaliacoes={modelo.totalAvaliacoes}
            online={modelo.online}
            verificado={modelo.verificado}
            ultimaAtividade={modelo.ultimaAtividade}
            descricao={modelo.descricao}
            imagemUrl={modelo.imagemUrl}
            destaque={modelo.destaque}
            badges={modelo.badges}
          />
        ))}
      </div>

      <div style={{ 
        marginTop: '3rem', 
        padding: '2rem', 
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        maxWidth: '800px',
        margin: '3rem auto 0'
      }}>
        <h2 style={{ marginBottom: '1rem', color: '#333' }}>
          Funcionalidades Implementadas:
        </h2>
        <ul style={{ lineHeight: '1.6', color: '#666' }}>
          <li>✅ <strong>Destaque Premium:</strong> Bordas douradas e sombras especiais para modelos em destaque</li>
          <li>✅ <strong>Badges Dinâmicos:</strong> Sistema flexível de badges com estilos específicos (NOVA, VIP, Vídeo, etc.)</li>
          <li>✅ <strong>Botão Favorito Melhorado:</strong> Visual aprimorado com animações suaves</li>
          <li>✅ <strong>Layout Reorganizado:</strong> Hierarquia visual clara e informações bem estruturadas</li>
          <li>✅ <strong>Status Online/Offline:</strong> Indicadores visuais claros do status da modelo</li>
          <li>✅ <strong>Badge Verificado:</strong> Indicação visual de perfis verificados</li>
          <li>✅ <strong>Descrição Truncada:</strong> Máximo de 2 linhas com truncamento elegante</li>
          <li>✅ <strong>Avaliação e Preço:</strong> Layout balanceado e destacado</li>
          <li>✅ <strong>Compatibilidade:</strong> Funciona com dados antigos e novos formatos</li>
        </ul>
      </div>
    </div>
  );
}

export default ExemploModelCard; 