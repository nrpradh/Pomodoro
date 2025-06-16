import customtkinter as ctk

# Membuat window utama
root = ctk.CTk()
root.geometry("400x300")
root.title("Pomodoro")
root.configure(fg_color="#F1F1F1")  # Set background color

# Nilai default
menit = 25
detik = 0

# Container frame supaya formnya diatur posisinya dengan lebih mudah
formFrame = ctk.CTkFrame(root, fg_color="#F1F1F1")
formFrame.pack(pady=0, padx=10)

# Focus Time
focusLabel = ctk.CTkLabel(formFrame, text="Focus :", font=ctk.CTkFont(family="jersey 10", size=15), text_color="#333333")
focusLabel.grid(row=0, column=0, padx=5, pady=5)

focusEntryHour = ctk.CTkEntry(formFrame, width=25, 
                               font=ctk.CTkFont(family="jersey 10", size=15), 
                               fg_color="transparent", text_color="black", border_width=0,
                               placeholder_text="00")
focusEntryHour.grid(row=0, column=1, padx=0, pady=5)

focusLabelPemisah = ctk.CTkLabel(formFrame, text=":", font=ctk.CTkFont(family="jersey 10", size=15), text_color="#333333")
focusLabelPemisah.grid(row=0, column=2, padx=0, pady=5)

focusEntryMinute = ctk.CTkEntry(formFrame, width=25, 
                                 font=ctk.CTkFont(family="jersey 10", size=15), 
                                 fg_color="transparent", text_color="black", border_width=0,
                                 placeholder_text="00")
focusEntryMinute.grid(row=0, column=3, padx=0, pady=5)

# Short Break
shortBreakLabel = ctk.CTkLabel(formFrame, text="Short Break :", font=ctk.CTkFont(family="jersey 10", size=15), text_color="#333333")
shortBreakLabel.grid(row=0, column=4, padx=10, pady=5)

shortBreakEntryHour = ctk.CTkEntry(formFrame, width=25, 
                                    font=ctk.CTkFont(family="jersey 10", size=15), 
                                    fg_color="transparent", text_color="black", border_width=0,
                                    placeholder_text="00")
shortBreakEntryHour.grid(row=0, column=5, padx=0, pady=5)

shortBreakLabelPemisah = ctk.CTkLabel(formFrame, text=":", font=ctk.CTkFont(family="jersey 10", size=15), text_color="#333333")
shortBreakLabelPemisah.grid(row=0, column=6, padx=0, pady=5)

shortBreakEntryMinute = ctk.CTkEntry(formFrame, width=25, 
                                      font=ctk.CTkFont(family="jersey 10", size=15), 
                                      fg_color="transparent", text_color="black", border_width=0,
                                      placeholder_text="00")
shortBreakEntryMinute.grid(row=0, column=7, padx=0, pady=5)

# Long Break
longBreakLabel = ctk.CTkLabel(formFrame, text="Long Break :", font=ctk.CTkFont(family="jersey 10", size=15), text_color="#333333")
longBreakLabel.grid(row=0, column=8, padx=10, pady=5)

longBreakEntryHour = ctk.CTkEntry(formFrame, width=25, 
                                   font=ctk.CTkFont(family="jersey 10", size=15), 
                                   fg_color="transparent", text_color="black", border_width=0,
                                   placeholder_text="00")
longBreakEntryHour.grid(row=0, column=9, padx=0, pady=5)

longBreakLabelPemisah = ctk.CTkLabel(formFrame, text=":", font=ctk.CTkFont(family="jersey 10", size=15), text_color="#333333")
longBreakLabelPemisah.grid(row=0, column=10, padx=0, pady=5)

longBreakEntryMinute = ctk.CTkEntry(formFrame, width=25, 
                                     font=ctk.CTkFont(family="jersey 10", size=15), 
                                     fg_color="transparent", text_color="black", border_width=0,
                                     placeholder_text="00")
longBreakEntryMinute.grid(row=0, column=11, padx=0, pady=5)

# Label untuk memampilkan status timer
statusLabel = ctk.CTkLabel(root, text="Focus", font=ctk.CTkFont(family="jersey 10", size=20), text_color="#333333")
statusLabel.pack(pady=0)

# Label untuk memanpilkan waktu
timeLabel = ctk.CTkLabel(root, text=f"{menit:02d}:{detik:02d}", font=ctk.CTkFont(family="jersey 10", size=50), text_color="#333333")
timeLabel.pack(pady=0)

# Button untuk kontrol timer
startButton = ctk.CTkButton(root, text="Start", command=lambda: print("Start Timer"), width=100, height=40, fg_color="#4F9747", text_color="white", font=ctk.CTkFont(family="jersey 10", size=15))
startButton.pack(pady=3)
resetButton = ctk.CTkButton(root, text="Stop", command=lambda: print("Stop Timer"), width=100, height=40, fg_color="#C72C41", text_color="white", font=ctk.CTkFont(family="jersey 10", size=15))
resetButton.pack(pady=3)
pauseButton = ctk.CTkButton(root, text="Pause", command=lambda: print("Pause Timer"), width=100, height=40, fg_color="#F6A600", text_color="white", font=ctk.CTkFont(family="jersey 10", size=15))
pauseButton.pack(pady=3)

root.mainloop()
