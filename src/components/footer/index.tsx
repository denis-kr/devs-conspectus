export default async function Footer() {
  return (
    <footer className="text-center p-6">
      © {new Date().getFullYear()} Denis Kravchenko. All rights reserved.
    </footer>
  );
}
