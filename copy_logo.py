import shutil

src = r"C:\Users\mursd\.gemini\antigravity-ide\brain\d6b2fe1c-9161-4270-ba74-e702e6355236\elegant_h_logo_1780515780201.png"
dst1 = r"d:\HDIGITAL\ANDROID_ANTIGRAVITY\DIGITALH-SITE\public\logo_h.png"

shutil.copyfile(src, dst1)
print("Logo copied successfully!")
