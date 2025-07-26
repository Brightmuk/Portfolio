const apps = [
  { name: "Flashcards", link: "/privacy/flashcards" },
  { name: "Nenacall", link: "/privacy/nenacall" },
];

const Apps = () => (
  <div className="p-8">
    <h2 className="text-2xl font-semibold mb-4">My Apps</h2>
    <ul className="space-y-2">
      {apps.map((app) => (
        <li key={app.name} className="border p-4 rounded shadow">
          <div className="font-bold">{app.name}</div>
          <a href={app.link} className="text-blue-500 text-sm">Privacy Policy</a>
        </li>
      ))}
    </ul>
  </div>
);
export default Apps;
