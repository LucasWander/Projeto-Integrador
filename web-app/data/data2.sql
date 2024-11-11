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
-- Data for Name: green_area_neighborhood_image; Type: TABLE DATA; Schema: public; Owner: green-area
--

INSERT INTO public.green_area_neighborhood_image (id, image_link, description, neighborhood_id) VALUES (6, 'https://drive.google.com/drive-viewer/AKGpihZAR7lZP6_kjyBB3_Yzk03iq3Moq7WLp3PwhKEUDjQXuLLTvHIJSQSuwzT-IL2UAsKFlSxGPkTMmrByZn0irXDfS2WqQwjr2g=s1600-rw-v1', 'Centro 4', 3);
INSERT INTO public.green_area_neighborhood_image (id, image_link, description, neighborhood_id) VALUES (5, 'https://drive.google.com/drive-viewer/AKGpihbSb4iXVuLnqSNVtO6oljEmpRlkK0-NNtKcv5zvBXCLZBm26wDg064dxIICORNN_nYJkyCLmdwDzgdRdOZF-roO5cvpcBhl4w=s1600-rw-v1', 'Centro 3', 3);
INSERT INTO public.green_area_neighborhood_image (id, image_link, description, neighborhood_id) VALUES (4, 'https://drive.google.com/drive-viewer/AKGpihZbrFOsJYMCORV4GInGDUK6Ur8W_V-08WggQK6Z8wasGkq6gBVBhkGKXFKBNbnCKorXmryLo7MKs_GJL15nrY8BdPz0mahsQQ=s1600-rw-v1', 'Centro 2', 3);
INSERT INTO public.green_area_neighborhood_image (id, image_link, description, neighborhood_id) VALUES (3, 'https://drive.google.com/drive-viewer/AKGpihZk3sQueqGmizNFVXmWTrK5FkQrpjsncS2kHGQimIGJaZhfNEgnyH85HKEgCrVomKi6mYVh_hH2O2zHK47IB3xwLRKrT3CdGw=s1600-rw-v1', 'Centro 1', 3);
INSERT INTO public.green_area_neighborhood_image (id, image_link, description, neighborhood_id) VALUES (7, 'https://drive.google.com/drive-viewer/AKGpihaRR1lB5hq5Y8WlpGIPIbcQBLpUW0JN2TzNkPcr7-8HuCp9ovKBKPMVv10n4rBAfkhMRM63Ce_N4ONDtKNb5ZgJMA6Bwti6zXk=s1600-rw-v1', 'cev 1', 4);
INSERT INTO public.green_area_neighborhood_image (id, image_link, description, neighborhood_id) VALUES (8, 'https://drive.google.com/drive-viewer/AKGpihaJJTmEWnDcY3ZNknAf0_MNbGXEZmHfi2Y6-L0051ppdOeNb1Wv1cB41XjjxNPQZY-Tmth1RD-NdV8SmvJGH6SfQhNdqmGWB7Q=s1600-rw-v1', 'cherv 2', 4);
INSERT INTO public.green_area_neighborhood_image (id, image_link, description, neighborhood_id) VALUES (9, 'https://drive.google.com/drive-viewer/AKGpihZlA1xPa_yeTxP2k9rMgVrhMwVU7VpzomaU9dSmEE5NBea2erBJgwokOjJM9zLk_xEbqzlaeePvD_R63aYre8VMSp2jXaNTPg=s1600-rw-v1', 'cherv 3', 4);
INSERT INTO public.green_area_neighborhood_image (id, image_link, description, neighborhood_id) VALUES (10, 'https://drive.google.com/drive-viewer/AKGpihZQHO8gBWpPw2OruB-AejVp5JYIrdNz3D360l7AJyJ0Aicnhr0GQtiyqiQuueu18CNFm_YXxTBqeqjIkNy-iTcH-taQJBwUEKE=s1600-rw-v1', 'cherv 4', 4);
INSERT INTO public.green_area_neighborhood_image (id, image_link, description, neighborhood_id) VALUES (11, 'https://i.imgur.com/kqSl6LI.png', 'flo 1', 5);
INSERT INTO public.green_area_neighborhood_image (id, image_link, description, neighborhood_id) VALUES (12, 'https://i.imgur.com/vRbsh7A.png', 'flo 2', 5);
INSERT INTO public.green_area_neighborhood_image (id, image_link, description, neighborhood_id) VALUES (13, 'https://i.imgur.com/7n23rLF.png', 'flo 3', 5);
INSERT INTO public.green_area_neighborhood_image (id, image_link, description, neighborhood_id) VALUES (14, 'https://i.imgur.com/aC0aYha.png', 'Flo 4', 5);


--
-- Name: green_area_neighborhood_image_id_seq; Type: SEQUENCE SET; Schema: public; Owner: green-area
--

SELECT pg_catalog.setval('public.green_area_neighborhood_image_id_seq', 14, true);


--
-- PostgreSQL database dump complete
--

