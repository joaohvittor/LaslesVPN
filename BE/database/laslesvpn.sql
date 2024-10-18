-- Criação de tabela de usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserindo dados de exemplo
INSERT INTO usuarios (nome, email, senha) VALUES
('João', 'joao@example.com', 'senha123'),
('Maria', 'maria@example.com', 'senha456');
