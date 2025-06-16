import customtkinter as ctk

root = ctk.CTk()
root.geometry("700x150")  # Lebar diperbesar biar cukup untuk form horizontal
root.title("Timer Hitung Mundur")

menit = 25

# Container frame
formFrame = ctk.CTkFrame(root)
formFrame.grid(row=0, column=0, padx=10, pady=10, sticky="nsew")

# Focus Time
focusLabel = ctk.CTkLabel(formFrame, text="Focus Time:", font=("Arial", 12), text_color="#333333")
focusLabel.grid(row=0, column=0, sticky="w", padx=5, pady=0)

focusEntry = ctk.CTkEntry(formFrame, width=80, textvariable=ctk.StringVar(value=str(menit)), font=("Arial", 12))
focusEntry.grid(row=0, column=1, padx=0, pady=0)

# Short Break
shortBreakLabel = ctk.CTkLabel(formFrame, text="Short Break:", font=("Arial", 12), text_color="#333333")
shortBreakLabel.grid(row=0, column=2, sticky="w", padx=0, pady=0)

shortBreakEntry = ctk.CTkEntry(formFrame, width=80, font=("Arial", 12))
shortBreakEntry.grid(row=0, column=3, padx=0, pady=0)

# Long Break
longBreakLabel = ctk.CTkLabel(formFrame, text="Long Break:", font=("Arial", 12), text_color="#333333")
longBreakLabel.grid(row=0, column=4, sticky="w", padx=0, pady=0)

longBreakEntry = ctk.CTkEntry(formFrame, width=80, font=("Arial", 12))
longBreakEntry.grid(row=0, column=5, padx=0, pady=0)

root.grid_columnconfigure(0, weight=1)
root.mainloop()
