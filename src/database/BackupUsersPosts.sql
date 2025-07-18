PGDMP      3    
            }            app    17.4    17.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16435    app    DATABASE     i   CREATE DATABASE app WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt-BR';
    DROP DATABASE app;
                     postgres    false            �            1259    16448    posts    TABLE     �   CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    content text NOT NULL,
    user_id integer
);
    DROP TABLE public.posts;
       public         heap r       postgres    false            �            1259    16447    posts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.posts_id_seq;
       public               postgres    false    220                        0    0    posts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;
          public               postgres    false    219            �            1259    16437    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    16436    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    218                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    217            ]           2604    16451    posts id    DEFAULT     d   ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);
 7   ALTER TABLE public.posts ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    219    220    220            \           2604    16440    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218            �          0    16448    posts 
   TABLE DATA           <   COPY public.posts (id, title, content, user_id) FROM stdin;
    public               postgres    false    220   �       �          0    16437    users 
   TABLE DATA           :   COPY public.users (id, name, email, password) FROM stdin;
    public               postgres    false    218   �                  0    0    posts_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.posts_id_seq', 3, true);
          public               postgres    false    219                       0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 53, true);
          public               postgres    false    217            c           2606    16455    posts posts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public                 postgres    false    220            _           2606    16446    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public                 postgres    false    218            a           2606    16444    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    218            d           2606    16456    posts posts_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
 B   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_user_id_fkey;
       public               postgres    false    218    4705    220            �   9   x�3��/.Q0�t��+I�+Q�OS(��rA$�0$�8���!���Ɯ�\1z\\\ �3D      �   �  x�]T�v�0;��gI^om��ٚ=}��2���T���_����> R��p�o
x�/�+���X�Fqҋ�5k|�htr5$�[�i�Z����0�B������0�~1ì�Q�J#,\��t;ˮ��1����B��	���4�q��%^�L�������^�����:Ţ;���1Κ�i�(�Z�o.]ⷀQ�R�+}���1��1Ĺ/�y{�¨�pV���0jc\9�<tNL)�	��ԕ(����)��:Û�ѕ����c�����7.]�%��h�q[K�P����!P7Rw7R�6p�rX��(��!����h������BN�O.���g[�i�gW:�Ơ��?]�0�R���}�e3E��tD8pe-?�r�Aa�����K�mP�ӑ�H�����U8֦�t{��ki2ĉ��ۋ�]/�N}^�X(ڤ(�c��J�Ugy��'����x,}'-��)Mq�\��|���(���J�FB9.�@.`C!�r��,4����4%�o҇7E��t��e��S8���q���(l2�R�VvZu6Z��9�]!��E�S��'�/�����4M���6�s]�����1d�l$�R����|��=PJ9�sS�r�[6,ДH"�e�t_���e������J�&�     