import customtkinter as ctk

root = ctk.CTk()
root.geometry("400x300")
root.title("Riwayat")
root.configure(fg_color="#F1F1F1")

label = ctk.CTkLabel(root, text="Riwayat", font=ctk.CTkFont(size=20, weight="bold", family="Jersey 10"), text_color="#333333")
label.pack(pady=5)

frame = ctk.CTkFrame(root, fg_color="#823F3F")
frame.pack(pady=10, padx=10, expand=True, fill="both")


headerFrame = ctk.CTkFrame(frame, fg_color="#1FD34C")
headerFrame.pack(fill="x")

headerFrame.grid_columnconfigure(0, weight=1)
headerFrame.grid_columnconfigure(1, weight=1)
headerFrame.grid_columnconfigure(2, weight=1)

labelSession = ctk.CTkLabel(headerFrame, text="SESSION", font=ctk.CTkFont(size=15, weight="bold", family="Jersey 10"), text_color="#F1F1F1")
labelSession.grid(row=0, column=0, padx=10, pady=5)
labelTask = ctk.CTkLabel(headerFrame, text="TASK", font=ctk.CTkFont(size=15, weight="bold", family="Jersey 10"), text_color="#F1F1F1")
labelTask.grid(row=0, column=1, padx=10, pady=5)
labelStatus = ctk.CTkLabel(headerFrame, text="STATUS", font=ctk.CTkFont(size=15, weight="bold", family="Jersey 10"), text_color="#F1F1F1")
labelStatus.grid(row=0, column=2, padx=10, pady=5)

scrollFrame = ctk.CTkScrollableFrame(frame, fg_color="#1F847B")
scrollFrame.pack(expand=True, fill="both", padx=0, pady=10)
scrollFrame.grid_columnconfigure(0, weight=1)
scrollFrame.grid_columnconfigure(1, weight=1)
scrollFrame.grid_columnconfigure(2, weight=1)
# Example data for the scrollable frame
data = [
    {"session": "1", "task": "Task A", "status": "Completed"},
    {"session": "2", "task": "Task B", "status": "In Progress"},
    {"session": "3", "task": "Task C", "status": "Completed"},
    {"session": "4", "task": "Task D", "status": "Failed"},
]
for i, item in enumerate(data):
    session_label = ctk.CTkLabel(scrollFrame, text=item["session"], font=ctk.CTkFont(size=15, family="Jersey 10"), text_color="#F1F1F1")
    session_label.grid(row=i, column=0, padx=10, pady=5, sticky="w")
    
    task_label = ctk.CTkLabel(scrollFrame, text=item["task"], font=ctk.CTkFont(size=15, family="Jersey 10"), text_color="#F1F1F1")
    task_label.grid(row=i, column=1, padx=10, pady=5, sticky="w")
    
    status_label = ctk.CTkLabel(scrollFrame, text=item["status"], font=ctk.CTkFont(size=15, family="Jersey 10"), text_color="#F1F1F1")
    status_label.grid(row=i, column=2, padx=10, pady=5, sticky="w")


root.mainloop()