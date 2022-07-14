import ModalEditarPerfil from "../controller/modalEditarPerfil.controller.js";
import Homepage from "../models/homepage.models.js";
import {Construção} from "../models/criarHabitos.models.js";

Homepage.criarHeader()

Homepage.criarMain()
Construção.criarHabitos();
Homepage.todosHabitos()
