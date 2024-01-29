import Link from "next/link";

export default function Order() {
  return (
    <div className="order">
      <p>Tunggu apa lagi ? Langsung joki tugas mu di stacktugas.id</p>
      <Link href="https://api.whatsapp.com/send/?phone=6285349563245&text=Halo%2C+saya+mau+joki+tugas">
        <a className="btn">Order Sekarang</a>
      </Link>
    </div>
  );
}
