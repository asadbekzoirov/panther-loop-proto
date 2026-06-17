/* global React, TASKS, Onboarding, HomeFeed, TaskDetails, PostTask, TaskChat, Profile, Rides, Payments */

// A single self-contained device that routes between PantherLoop screens.
function DeviceApp({ initial = "home" }) {
  const [screen, setScreen] = React.useState(initial);
  const [task, setTask] = React.useState(TASKS[0]);
  const go = (s) => setScreen(s);

  const onTab = (k) => {
    if (k === "messages") go("chat");
    else if (k === "profile") go("profile");
    else go("home"); // home + alerts
  };
  const onPost = () => go("post");

  switch (screen) {
    case "onboarding":
      return <Onboarding onDone={() => go("home")} />;
    case "details":
      return <TaskDetails task={task} onBack={() => go("home")} onAccept={() => go("chat")} onMessage={() => go("chat")} />;
    case "post":
      return <PostTask onBack={() => go("home")} onSubmit={() => go("home")} />;
    case "chat":
      return <TaskChat onBack={() => go("home")} />;
    case "profile":
      return <Profile onTab={onTab} onPost={onPost} />;
    case "rides":
      return <Rides onTab={onTab} onPost={onPost} />;
    case "payments":
      return <Payments onTab={onTab} onPost={onPost} />;
    case "home":
    default:
      return <HomeFeed onOpenTask={(t) => { setTask(t); go("details"); }} onTab={onTab} onPost={onPost} />;
  }
}

const SCREENS = [
  { key: "onboarding", label: "Onboarding · FIU gate" },
  { key: "home", label: "Home Feed" },
  { key: "details", label: "Task Details" },
  { key: "post", label: "Post Task" },
  { key: "chat", label: "Task Chat" },
  { key: "profile", label: "Profile" },
  { key: "rides", label: "Rides" },
  { key: "payments", label: "Payments" },
];

function Gallery() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "center", maxWidth: 1380, margin: "0 auto" }}>
      {SCREENS.map((s) => (
        <div key={s.key} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", letterSpacing: "0.01em" }}>{s.label}</span>
          <DeviceApp initial={s.key} />
        </div>
      ))}
    </div>
  );
}

window.DeviceApp = DeviceApp;
window.Gallery = Gallery;
