import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>stacktugas.id</h3>
            <p>Jasa joki tugas coding/pemrograman</p>
          </div>
          <div className="footer-section">
            <h3>Menu</h3>
            <ul>
              <li>
                <Link href="https://stacktugas.id" passHref>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.stacktugas.id/layanan" passHref>
                  <a>Layanan</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.stacktugas.id/pembayaran" passHref>
                  <a>Pembayaran</a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Sosial Media</h3>
            <ul>
              <li>
                <Link href="https://instagram.com/stacktugas.id" passHref>
                  <a>Instagram</a>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/stacktugas_id" passHref>
                  <a>Twitter</a>
                </Link>
              </li>
              <li>
                <Link href="https://t.me/jokitugasmaniac" passHref>
                  <a>Telegram</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
