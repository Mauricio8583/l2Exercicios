-- Insert rows into table 'Pagamentos'
INSERT INTO Pagamentos
( -- columns to insert data into
 [Id], [PessoaID], [DT_Pagamento]
)
VALUES
( -- first row: values for the columns in the list above
 1, 4, N'2021-09-01'
),
( -- second row: values for the columns in the list above
 2, 3, N'2021-09-05'
),
(
    3, 1, N'2021-09-19'
),
(
    4, 2, N'2021-09-25'
)
-- add more rows here
GO