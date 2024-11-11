--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: green_area_neighborhood; Type: TABLE DATA; Schema: public; Owner: green-area
--

INSERT INTO public.green_area_neighborhood (id, name, pub_data, pcv_index, total_area, total_green_area, description) VALUES (3, 'Centro', '2024-11-11 20:44:05+00', 4.08, 1.76, 0.074, 'Bairro centro');
INSERT INTO public.green_area_neighborhood (id, name, pub_data, pcv_index, total_area, total_green_area, description) VALUES (4, 'Chervezon', '2024-11-11 20:44:49+00', 7.82, 0.019, 0.253, 'Chervezon');
INSERT INTO public.green_area_neighborhood (id, name, pub_data, pcv_index, total_area, total_green_area, description) VALUES (5, 'Floridiana', '2024-11-11 20:45:15+00', 10.92, 0.808, 0.08, 'Floridiana');


--
-- Name: green_area_neighborhood_id_seq; Type: SEQUENCE SET; Schema: public; Owner: green-area
--

SELECT pg_catalog.setval('public.green_area_neighborhood_id_seq', 5, true);


--
-- PostgreSQL database dump complete
--

