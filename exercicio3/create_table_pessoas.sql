-- Create a new table called 'TableName' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.TableName', 'U') IS NOT NULL
DROP TABLE SchemaName.TableName
GO
-- Create the table in the specified schema
CREATE TABLE dbo.Pessoas
(
    Id INT NOT NULL PRIMARY KEY, -- primary key column
    Nome [NVARCHAR](100) NOT NULL,
    ContratoID INT NOT NULL,
    Inadimplente [NVARCHAR](10) NOT NULL,
    DT_Completo DATE,
    FOREIGN KEY (ContratoID) REFERENCES Contratos(Id)
    -- specify more columns here
);
GO