-- Insert rows into table  Pessoas'
INSERT INTO Pessoas
( -- columns to insert data into
 [Id], [Nome], [ContratoID], [Inadimplente], [DT_COMPLETO]
)
VALUES
( -- first row: values for the columns in the list above
 1, N'Cristian Ghypriev', 2, N'S', NULL
),
( -- second row: values for the columns in the list above
 2,N'Joana Cabel', 1, N'S', NULL
),
(
  3,N'John Serial', 3, N'S', NULL
),
(
    4, N'Michael Seven', 2, N'N', N'2021-09-25'
)
-- add more rows here

GO