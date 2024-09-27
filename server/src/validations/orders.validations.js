// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ
import { body } from "express-validator";

export const orderValidation = [
  body("coffe").isString(),
  body("coffe").notEmpty(),
  body("coffe").isIn(["Espresso", "Americano", "Cappuccino"]),
];
