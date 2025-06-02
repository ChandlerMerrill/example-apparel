// app/(dashboard)/onboarding/page.jsx

// Mocked for now — replace with Firestore query later
async function getOnboardingChecklist(accountId) {
  return [
    { id: "intro_call", label: "Complete Intro Call", completed: true },
    {
      id: "upload_branding",
      label: "Upload Logos & Branding",
      completed: false,
    },
    {
      id: "review_mockup",
      label: "Review Initial Design Mockup",
      completed: false,
    },
    { id: "confirm_products", label: "Confirm Product List", completed: false },
    { id: "sign_agreement", label: "Sign Service Agreement", completed: true },
  ];
}

export default async function OnboardingPage() {
  const accountId = "client-id"; // Replace with auth or param later
  const tasks = await getOnboardingChecklist(accountId);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Next Steps</h1>
      <p className="mb-6 text-gray-600">
        Here's a checklist of important onboarding steps to get you set up. Let
        us know if you need help with anything!
      </p>

      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-start gap-3 p-4 bg-white border rounded-md shadow-sm"
          >
            <input
              type="checkbox"
              checked={task.completed}
              disabled
              className="mt-1 accent-blue-600"
            />
            <span
              className={
                task.completed ? "text-gray-500 line-through" : "text-gray-800"
              }
            >
              {task.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
