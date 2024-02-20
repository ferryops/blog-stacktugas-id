const { execSync } = require("child_process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan pesan commit: ", (commitMessage) => {
  try {
    // Menambahkan semua perubahan ke dalam staging area
    execSync("git add .", { stdio: "inherit" });

    // Melakukan commit dengan pesan yang dimasukkan
    execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit" });

    // Melakukan push ke branch saat ini
    execSync("git push origin HEAD", { stdio: "inherit" });

    console.log("Commit berhasil dipush ke GitHub.");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }

  rl.close();
});
