$(document).ready(function() {
    // Görev ekleme
    $("#addTaskBtn").click(function() {
        let taskText = $("#taskInput").val().trim();
        if (taskText === "") return;
        
        $.ajax({
            url: "/tasks",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ text: taskText, completed: false }),
            success: function() {
                location.reload();
            },
            error: function(err) {
                console.error("Görev ekleme hatası:", err);
            }
        });
        
    });

    $.get("/tasks", function(data) {
        let taskList = $("#taskList");
        taskList.empty();
        data.forEach(task => {
            let taskItem = `
                <li data-id="${task.id}">
                    <input type="checkbox" class="completeTask" ${task.completed ? "checked" : ""}>
                    <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                    <button class="editTask">✏️</button>
                    <button class="deleteTask">🗑️</button>
                </li>
            `;
            taskList.append(taskItem);
        });
    });

    // Görevi tamamlama
    $(".completeTask").change(function() {
        let taskId = $(this).closest("li").data("id");
        let completed = $(this).prop("checked");

        $.ajax({
            url: `/tasks/${taskId}`,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify({ completed }),
            success: function() {
                $(this).closest("li").toggleClass("completed", completed);
            }
        });
    });

    // Görev düzenleme
    $(".editTask").click(function() {
        let taskId = $(this).closest("li").data("id");
        let newText = prompt("Yeni görev adı:");
        if (!newText) return;

        $.ajax({
            url: `/tasks/${taskId}`,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify({ text: newText }),
            success: function() {
                location.reload();
            }
        });
    });

    // Görev silme
    $(".deleteTask").click(function() {
        let taskId = $(this).closest("li").data("id");

        $.ajax({
            url: `/tasks/${taskId}`,
            type: "DELETE",
            success: function() {
                location.reload();
            }
        });
    });

    // Yapılan görevleri sil
    $("#clearCompleted").click(function() {
        $.ajax({
            url: "/tasks/clear-completed",
            type: "DELETE",
            contentType: "application/json",
            success: function() {
                location.reload();
            }
        });
    });

    // Tüm görevleri sil
    $("#clearAll").click(function() {
        $.ajax({
            url: "/tasks",
            type: "DELETE",
            contentType: "application/json",
            success: function() {
                location.reload();
            }
        });
    });

    // Tamamlanan görevlerin üstünü çizme
    $(".completeTask").each(function() {
        if ($(this).prop("checked")) {
            $(this).closest("li").addClass("completed");
        }
    });
});
