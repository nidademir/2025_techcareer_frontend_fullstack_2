const express = require("express");
const fs = require("fs");
const router = express.Router();
const dbFile = "db.json";

// 📌 JSON dosyasını oku
function readDB() {
    return JSON.parse(fs.readFileSync(dbFile, "utf-8"));
}

// 📌 JSON dosyasına yaz
function writeDB(data) {
    try {
        fs.writeFileSync(dbFile, JSON.stringify(data, null, 2), "utf-8");
    } catch (err) {
        console.error("Veri kaydedilirken hata oluştu:", err);
    }
}

// 📌 To-Do List sayfasını aç
router.get("/todo", (req, res) => {
    const data = readDB();
    res.render("tasks", { tasks: data.tasks });
});

// 📌 Yeni görev ekleme
router.post("/todo", (req, res) => {
    if (!req.body.text) {
        return res.status(400).json({ error: "Görev metni gereklidir." });
    }

    const data = readDB();
    const newTask = {
        id: Date.now(),
        text: req.body.text,
        completed: false,
    };

    data.tasks.push(newTask);
    writeDB(data);
    res.status(201).json(newTask);
});

// 📌 Görev güncelleme (tamamlama veya metni değiştirme)
router.put("/todo/:id", (req, res) => {
    const data = readDB();
    const task = data.tasks.find(t => t.id === Number(req.params.id));

    if (!task) {
        return res.status(404).json({ error: "Görev bulunamadı." });
    }

    if (req.body.text !== undefined) task.text = req.body.text;
    if (req.body.completed !== undefined) task.completed = req.body.completed;

    writeDB(data);
    res.status(200).json(task);
});

// 📌 Görev silme
router.delete("/todo/:id", (req, res) => {
    let data = readDB();
    const initialLength = data.tasks.length;
    data.tasks = data.tasks.filter(t => t.id !== Number(req.params.id));

    if (data.tasks.length === initialLength) {
        return res.status(404).json({ error: "Görev bulunamadı." });
    }

    writeDB(data);
    res.status(200).json({ message: "Görev silindi." });
});

// 📌 Yapılan görevleri temizleme
router.delete("/todo/clear-completed", (req, res) => {
    let data = readDB();
    data.tasks = data.tasks.filter(t => !t.completed);
    writeDB(data);
    res.status(200).json({ message: "Tamamlanan görevler silindi." });
});

// 📌 Tüm görevleri temizleme
router.delete("/todo", (req, res) => {
    writeDB({ tasks: [] });
    res.status(200).json({ message: "Tüm görevler silindi." });
});

module.exports = router;
