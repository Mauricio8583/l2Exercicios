-- Create a new table called 'TableName' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.TableName', 'U') IS NOT NULL
DROP TABLE SchemaName.TableName
GO
-- Create the table in the specified schema
CREATE TABLE dbo.Pagamentos
(
    Id INT NOT NULL PRIMARY KEY, -- primary key column
    PessoaID INT NOT NULL,
    DT_Pagamento DATE,
    FOREIGN KEY (PessoaID) REFERENCES Pessoas(Id)
    -- specify more columns here
);
GO