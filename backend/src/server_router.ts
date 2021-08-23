import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get("/api/get/produtos", async (req, res) => {
  const users = await prisma.user.findMany({});

  return res.json(users);
});

router.post("/api/post/produtos", async (req, res) => {
  const { nome, senha } = req.body;
  const post = await prisma.user.create({
    data: {
      nome,
      senha,
    },
  });

  res.json(post);
});

router.put("/api/publish/:id", async (req, res) => {
    const { id } = req.params;
    const {nome, senha } = req.body;
    const publishId = await prisma.user.update({
      where: {
        id,
      },
      data: {
        nome,
        senha
      },
    });

    res.json(publishId);
});

router.delete('/api/user/:id', async (req, res) => {
    const { id } =  req.params
    const deleteId = await prisma.user.delete({
      where: {
        id
      },
    })

    return res.json(deleteId);
})

export default router;
