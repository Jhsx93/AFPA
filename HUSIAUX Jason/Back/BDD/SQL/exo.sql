-------------------------|
-- Evaluation ligne 274  |
-------------------------|

-- DROP DATABASE if EXISTS Hotel;
-- CREATE DATABASE Hotel;
-- USE Hotel;


-- CREATE TABLE Client (
-- 		adresse_client	VARCHAR (50) NOT NULL , 
-- 		nom_client		VARCHAR (50) NOT NULL , 
-- 		prenom_client	VARCHAR (50) NOT NULL , 
-- 		num_client		INT NOT NULL
-- 	,CONSTRAINT Client_PK PRIMARY KEY (num_client)	
-- );
	
-- CREATE TABLE Reservation (
-- 		num_chambre			INT NOT NULL , 
-- 		num_client			INT NOT NULL , 
-- 		date_debut			DATE NOT NULL , 
-- 		date_fin				DATE NOT NULL ,
-- 		date_reservation	DATE NOT NULL , 
-- 		montant_arrhes		INT NOT NULL , 
-- 		prix_total			INT NOT NULL
-- 	,CONSTRAINT Reservation_PK PRIMARY KEY (num_chambre,num_client)
-- 	,CONSTRAINT Reservation_Chambre_FK FOREIGN KEY (num_chambre) REFERENCES Chambre(num_chambre)
-- 	,CONSTRAINT Reservation_Client_FK FOREIGN KEY (num_client) REFERENCES Client(num_client)
-- );	

-- CREATE TABLE Chambre (
-- 		capacite_chambre  INT NOT NULL ,
-- 		degre_confort	   INT NOT NULL ,
-- 		exposition			VARCHAR (50) NOT NULL ,
-- 		type_chmabre		VARCHAR (50) NOT NULL ,
-- 		num_chambre			INT NOT NULL ,
-- 		num_hotel			INT NOT NULL
-- 	,CONSTRAINT Chambre_PK PRIMARY KEY (num_chambre)
-- 	,CONSTRAINT Chambre_Hotel_FK FOREIGN KEY (num_hotel) REFERENCES Hotel(num_hotel) 
-- );

-- CREATE TABLE Hotel (
-- 		capacite_hotel		INT NOT NULL ,
-- 		categorie_hotel	VARCHAR (50) NOT NULL ,
-- 		nom_hotel			VARCHAR (50) NOT NULL ,
-- 		adresse_hotel		VARCHAR (50) NOT NULL ,
-- 		num_hotel			INT NOT NULL ,
-- 		num_station			INT NOT NULL
-- 	,CONSTRAINT Hotel_PK PRIMARY KEY (num_hotel)
-- 	,CONSTRAINT Hotel_Station_PK FOREIGN KEY (num_station) REFERENCES Station(num_station)			 
-- );

-- CREATE TABLE Station (
-- 		num_station	INT NOT NULL ,
-- 		nom_station	VARCHAR (50) NOT NULL
-- 	,CONSTRAINT Station_PK PRIMARY KEY (num_station)
-- );	


-- -----------------------------------------------------------------------------------------------------------------------------

-- CREATE USER 'util1'@'%' IDENTIFIED BY 'azerty1';
-- CREATE USER 'util2'@'%' IDENTIFIED BY 'azerty2';
-- CREATE USER 'util3'@'%' IDENTIFIED BY 'azerty3';

-- GRANT ALL 
-- ON hotel.* 
-- TO 'util1'
-- IDENTIFIED BY 'azerty1' ;

-- GRANT SELECT,insert 
-- ON hotel.
-- TO 'util2'
-- IDENTIFIED BY 'azerty2' ;

-- GRANT SELECT 
-- ON hotel.station
-- TO 'util3' 
-- IDENTIFIED BY 'azerty3' ;

--------------------------------------------------------------------------------------------------------------------------------

-- 1 - "Quelles sont les commandes du fournisseur 09120?"
-- SELECT numfou, numcom FROM entcom 
-- WHERE numfou = 9120

-- 2 - "Afficher le code des fournisseurs pour lesquels des commandes ont ??t?? pass??es."
-- SELECT numfou FROM vente 
-- WHERE delliv > 0 

-- 3 - "Afficher le nombre de commandes fournisseurs pass??es, et le nombre de fournisseur concern??s."
-- SELECT COUNT() 
-- FROM papyrus.vente
-- WHERE delliv > 0

-- SELECT DISTINCT numfou 
-- FROM papyrus.vente
-- WHERE delliv > 0

-- 4 - "Editer les produits ayant un stock inf??rieur ou ??gal au stock d'alerte et dont la quantit?? annuelle est inf??rieur est inf??rieure ??1000 (informations ?? fournir : n?? produit, libell??produit, stock, stockactuel d'alerte, quantit??annuelle)"
-- SELECT stkphy, codart, libart, stkale, qteann 
-- FROM papyrus.produit
-- WHERE stkphy <= stkale AND qteann < 1000

-- 5 - "Quels sont les fournisseurs situ??s dans les d??partements 75 78 92 77 ? L???affichage (d??partement, nom fournisseur) sera effectu?? par d??partement d??croissant, puis par ordre alphab??tique"
-- SELECT nomfou, posfou 
-- FROM papyrus.fournis
-- WHERE posfou IN (75014, 78250, 92200)
-- ORDER BY posfou DESC, nomfou ASC

-- 6 - "Quelles sont les commandes pass??es au mois de mars et avril?"
-- SELECT derliv FROM papyrus2.ligcom 
-- WHERE derliv BETWEEN '2007-03-01' AND '2007-04-30'

-- 7 - "Quelles sont les commandes du jourqui ont des observations particuli??res ?(Affichage num??ro de commande, date de commande)"
-- SELECT numcom, datcom
-- FROM papyrus.entcom
-- WHERE obscom NOT LIKE ""

-- 8 - "Listerle total de chaque commande par total d??croissant (Affichage num??ro de commande et total)"
-- SELECT qtecde, priuni, qtecde * priuni 
-- FROM papyrus.ligcom
-- ORDER BY qtecde * priuni DESC

-- 9 - "Lister les commandesdont le total est sup??rieur ?? 10000???; on exclura dans le calcul du total les articles command??s en quantit?? sup??rieure ou ??gale ?? 1000.(Affichage num??ro de commande et total)"
-- SELECT numcom, qtecde * priuni
-- FROM papyrus.ligcom
-- WHERE qtecde < 1000 AND qtecde * priuni > 10000
-- ORDER BY qtecde * priuni ASC

-- 10 - "Lister les commandes par nom fournisseur (Afficher le nom du fournisseur, le num??ro de commande et la date)"
-- SELECT nomfou, numcom, derliv
-- FROM papyrus.fournis, papyrus.ligcom
-- ORDER BY nomfou ASC

-- 11 - "Sortir les produits des commandes ayant le mot 'urgent' en observation?(Afficher le num??ro de commande, le nom du fournisseur, le libell?? du produit et le sous total= quantit?? command??e * Prix unitaire)"
-- SELECT obscom, numcom, numfou, libart, qtecde*priuni FROM papyrus.entcom
-- JOIN papyrus.ligcom
-- ON numcom = numcom
-- JOIN papyrus.fournis
-- ON numfou = numfou
-- JOIN papyrus.produit
-- ON codart = codart
-- WHERE obscom="Commande urgente"

-- 12 - "Coder de 2mani??res diff??rentes la requ??te suivante:Lister lenom desfournisseurs susceptibles de livrer au moins un article"
-- SELECT nomfou
-- FROM papyrus.fournis
-- WHERE satisf > 0

-- SELECT numfou FROM papyrus.vente
-- WHERE numfou = 8700 AND codart = 'B001'

-- 13 - "Coder de 2 mani??res diff??rentes la requ??te suivanteLister les commandes (Num??ro et date) dont le fournisseur est celui de la commande 70210"
-- SELECT numcom, derliv
-- FROM papyrus.ligcom
-- WHERE numcom = 70210

-- SELECT numcom, derliv
-- FROM papyrus.ligcom
-- WHERE numcom LIKE 70210

-- 14 - "Dans les articles susceptibles d?????tre vendus, lister les articles moins chers (bas??s sur Prix1) que le moins cher des rubans (article dont le premier caract??re commence par R). On affichera le libell?? de l???article et prix1"
-- SELECT libart, prix1
-- FROM papyrus.produit, papyrus.vente
-- WHERE prix1 < 120

-- 15 - "Editer la liste des fournisseurs susceptibles de livrer les produits dont le stock est inf??rieur ou ??gal ?? 150 % du stock d'alerte. La liste est tri??e par produit puis fournisseur"

-- 16 - "??diter la liste des fournisseurs susceptibles de livrer les produit dont le stock est inf??rieur ou ??gal ?? 150 % du stock d'alerte et un d??lai de livraison d'au plus 30 jours. La liste est tri??e par fournisseur puis produit"

-- 17 - "Avec le m??me type de s??lection que ci-dessus, sortir un total des stocks par fournisseur tri?? par total d??croissant"

-- 18 - "En fin d'ann??e, sortir la liste des produits dontla quantit?? r??ellement command??e d??passe 90% de la quantit?? annuellepr??vue."

-- 19 - "Calculer le chiffre d'affaire par fournisseur pour l'ann??e 93 sachant que les prix indiqu??s sont hors taxes et que le taux de TVA est 20%."

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- " LOT 1 "

-- 1 - "Afficher la liste des h??tels. Le r??sultat doit faire appara??tre le nom de l???h??tel et la ville"
-- SELECT * FROM hotel

-- 2 - "Afficher la ville de r??sidence de Mr White Le r??sultat doit faire appara??tre le nom, le pr??nom, et l'adresse du client"
-- SELECT cli_nom, cli_prenom, cli_ville FROM client 
-- WHERE cli_id = 1

-- 3 - "Afficher la liste des stations dont l???altitude < 1000 Le r??sultat doit faire appara??tre le nom de la station et l'altitude"
-- SELECT sta_nom, sta_altitude FROM station 
-- WHERE sta_altitude <1000

-- 4 - "Afficher la liste des chambres ayant une capacit?? > 1 Le r??sultat doit faire appara??tre le num??ro de la chambre ainsi que la capacit??"
-- SELECT cha_numero, cha_capacite FROM chambre 
-- WHERE cha_capacite >1 

-- 5 - "Afficher les clients n???habitant pas ?? Londre Le r??sultat doit faire appara??tre le nom du client et la ville"
-- SELECT cli_nom, cli_ville FROM client 
-- WHERE cli_ville NOT LIKE 'Londre'

-- 6 - "Afficher la liste des h??tels situ??e sur la ville de Bretou et poss??dant une cat??gorie>3 Le r??sultat doit faire appara??tre le nom de l'h??tel, ville et la cat??gorie"
-- SELECT hot_nom, hot_ville, hot_categorie FROM hotel 
-- WHERE hot_categorie >3 


-- " LOT 2 "

-- 7 - "Afficher la liste des h??tels avec leur station Le r??sultat doit faire appara??tre le nom de la station, le nom de l???h??tel, la cat??gorie, la ville"
-- SELECT sta_nom, hot_nom, hot_ville, hot_categorie FROM station, hotel 
-- WHERE sta_id = hot_sta_id 

-- 8 - "Afficher la liste des chambres et leur h??tel Le r??sultat doit faire appara??tre le nom de l???h??tel, la cat??gorie, la ville, le num??ro de la chambre"
-- SELECT hot_nom, hot_ville, hot_categorie, cha_numero FROM hotel, chambre 

-- 9 - "Afficher la liste des chambres de plus d'une place dans des h??tels situ??s sur la ville de Bretou Le r??sultat doit faire appara??tre le nom de l???h??tel, la cat??gorie, la ville, le num??ro de la chambre et sa capacit??"
-- SELECT hot_nom, hot_ville, hot_categorie, cha_numero, cha_capacite FROM hotel, chambre 
-- WHERE hot_ville LIKE 'Bretou' AND cha_capacite >1 

-- 10 - "Afficher la liste des r??servations avec le nom des clients Le r??sultat doit faire appara??tre le nom du client, le nom de l???h??tel, la date de r??servation"
-- SELECT cli_nom, hot_nom, res_date FROM client 
-- JOIN reservation 
-- ON res_cli_id = cli_id 
-- JOIN chambre 
-- ON res_cha_id = cha_id 
-- JOIN hotel 
-- ON cha_hot_id = hot_id

-- 11 - "Afficher la liste des chambres avec le nom de l???h??tel et le nom de la station Le r??sultat doit faire appara??tre le nom de la station, le nom de l???h??tel, le num??ro de la chambre et sa capacit??"
-- SELECT sta_nom, hot_nom, cha_numero, cha_capacite FROM hotel
-- JOIN chambre
-- ON cha_hot_id= hot_id
-- JOIN station
-- ON hot_sta_id = sta_id

-- 12 - "Afficher les r??servations avec le nom du client et le nom de l???h??tel AVEC datediff Le r??sultat doit faire appara??tre le nom du client, le nom de l???h??tel, la date de d??but du s??jour et la dur??e du s??jour"
-- SELECT cli_nom, hot_nom, res_date_debut, DATEDIFF (res_date_fin, res_date_debut)
-- FROM client
-- JOIN hotel
-- ON cli_id = hot_id
-- JOIN reservation
-- ON hot_id = res_id


-- " LOT 3 "

-- 13 - "Compter le nombre d???h??tel par station"
-- SELECT SUM(hot_sta_id = 1) AS hots_sta_1, SUM(hot_sta_id = 2) AS hots_sta_2, SUM(hot_sta_id = 3) AS hots_sta_3
-- FROM hotel

-- 14 - "Compter le nombre de chambre par station"
-- SELECT SUM(cha_hot_id = 1) AS cha_sta_1, SUM(cha_hot_id = 2) AS cha_sta_2, SUM(cha_hot_id = 3) AS cha_sta_3
-- FROM chambre

-- 15 - "Compter le nombre de chambre par station ayant une capacit?? > 1"
-- SELECT SUM(cha_hot_id = 1) AS cha_sta_1, SUM(cha_hot_id = 2) AS cha_sta_2, SUM(cha_hot_id = 3) AS cha_sta_3
-- FROM chambre
-- WHERE cha_capacite>1

-- 16 - "Afficher la liste des h??tels pour lesquels Mr Squire a effectu?? une r??servation"
-- SELECT DISTINCT hot_nom FROM reservation
-- JOIN client
-- on res_cli_id = cli_id
-- Join chambre 
-- on res_cha_id = cha_id
-- join hotel
-- on cha_hot_id = hot_id
-- where cli_nom = 'squire'

-- 17 - "Afficher la dur??e moyenne des r??servations par station"
-- SELECT AVG(DATEDIFF(res_date_fin, res_date_debut)) FROM reservation

-------------------------------------------------------------------------------------------------------------------------------------

-- Evaluation ex1

--------------------------------------------------------------------------------------

-- DROP DATABASE IF EXISTS base_exo1;

-- CREATE DATABASE base_exo1;

-- USE base_exo1;

-- CREATE TABLE client (
--     cli_num INT PRIMARY KEY,
--     cli_nom VARCHAR(50),
--     cli_adresse VARCHAR(50),
--     cli_tel VARCHAR(30)
--     );
    
-- CREATE TABLE commande (
--     com_num INT PRIMARY KEY,
--     cli_num INT,
--     com_date DATETIME,
--     com_obs VARCHAR(50),
--     FOREIGN KEY (cli_num) REFERENCES client(cli_num)
--     );
    
-- CREATE TABLE produit (
--     pro_num INT PRIMARY KEY,
--     pro_libelle VARCHAR(50),
--     pro_description VARCHAR(50)
--     );
    
-- CREATE TABLE est_compose (
--     com_num INT,
--     pro_num INT,
--     est_qte INT,
--     PRIMARY KEY (com_num, pro_num),
--     FOREIGN KEY (com_num) REFERENCES commande(com_num),
--     FOREIGN KEY (pro_num) REFERENCES produit(pro_num)
--     );

-- CREATE INDEX index_be1 ON client (cli_num);

---------------------------------------------------------------------------------------------

-- Evaluation ex2

-- 1 - Liste des contacts fran??ais :

-- SELECT CompanyName AS "Soci??t??", ContactName AS "contact", ContactTitle AS "Fonction", Phone AS "T??l??phone" 
-- FROM customers
-- WHERE Country = 'France' ;

---------------------------------------------------------------

-- SELECT ProductName AS 'Produit' , UnitPrice AS 'Prix'
-- FROM northwind.products
-- WHERE SupplierID = 1

-----------------------------------------------------------------

-- SELECT CompanyName AS 'Fournisseur' , COUNT(ProductName) AS 'Nbre produits' 
-- FROM northwind.suppliers JOIN northwind.products ON suppliers.SupplierID=products.SupplierID
-- WHERE Country = 'France'
-- GROUP BY CompanyName 
-- ORDER BY COUNT(ProductName) DESC

-- -----------------------------------------------------------------------------

-- SELECT CompanyName AS 'Client' , COUNT(OrderID) AS 'Nbre commandes'
-- FROM northwind.customers JOIN northwind.orders ON customers.CustomerID=orders.CustomerID
-- WHERE Country = 'France'
-- GROUP BY CompanyName
-- HAVING COUNT(OrderID) > 10 

-- ------------------------------------------------------------------------------

-- SELECT CompanyName AS 'Client', SUM(UnitPrice * Quantity) AS 'CA'
-- FROM northwind.customers
-- JOIN orders ON customers.CustomerID = orders.CustomerID 
-- JOIN order_details ON orders.OrderID = order_details.OrderID
-- GROUP BY CompanyName
-- HAVING SUM(UnitPrice * Quantity) > 30000
-- ORDER BY SUM(UnitPrice * Quantity) DESC

-- ----------------------------------------------------------------------------------

-- SELECT ShipCountry AS 'Pays'
-- FROM northwind.orders
-- JOIN northwind.order_details ON northwind.order_details.OrderID = northwind.orders.OrderID 
-- JOIN northwind.products ON northwind.products.ProductID = northwind.order_details.ProductID
-- JOIN northwind.suppliers ON northwind.suppliers.SupplierID = northwind.products.SupplierID
-- WHERE northwind.suppliers.CompanyName = 'Exotic Liquids'
-- GROUP BY ShipCountry

-- ---------------------------------------------------------------------------------

-- SELECT SUM(UnitPrice*Quantity) AS 'Montant Ventes 97' 
-- FROM northwind.order_details
-- JOIN northwind.orders ON order_details.OrderID = orders.OrderID
-- WHERE OrderDate BETWEEN ('1997-01-01 00:00:00') AND ('1997-12-31 00:00:00')

-- -----------------------------------------------------------------------------------

-- SELECT MONTH(OrderDate) AS 'Mois 97', SUM(UnitPrice*Quantity) AS 'Montant Ventes'
-- FROM northwind.order_details
-- JOIN northwind.orders ON orders.OrderID = order_details.OrderID
-- WHERE YEAR(OrderDate) = '1997'
-- GROUP BY MONTH(OrderDate)
-- ORDER BY MONTH(OrderDate) ASC

-- -------------------------------------------------------------------------------

-- SELECT MAX(OrderDate) AS 'Date de derni??re commande'
-- FROM northwind.orders
-- WHERE CustomerID = 'DUMON'

-- 10 - Quel est le d??lai moyen de livraison en jours ? 

-- SELECT ROUND(AVG(DATEDIFF (ShippedDate, OrderDate))) FROM northwind.orders