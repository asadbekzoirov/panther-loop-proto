/* global React, PhoneFrame, ScrollArea */
const { Button, Input, Icon } = window.PantherLoopDesignSystem_4d00e2;

function StepDots({ step, total }) {
  return (
    <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{ width: i === step ? 22 : 7, height: 7, borderRadius: 4, background: i === step ? "var(--gold)" : "var(--border)", transition: "width 160ms ease" }} />
      ))}
    </div>
  );
}

function Onboarding({ onDone }) {
  const [step, setStep] = React.useState(0);
  const next = () => (step < 2 ? setStep(step + 1) : onDone());

  return (
    <PhoneFrame statusBarDark>
      <ScrollArea style={{ background: "var(--surface)" }}>
        <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", padding: "8px 24px 24px" }}>
          {/* Brand */}
          <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 20px" }}>
            <img src="../../assets/wordmark.svg" width="180" alt="PantherLoop" />
          </div>

          {step === 0 && (
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "center", margin: "24px 0 28px" }}>
                <div style={{ width: 96, height: 96, borderRadius: 24, background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="graduation-cap" size={46} color="var(--gold-light)" />
                </div>
              </div>
              <h1 style={{ margin: 0, fontSize: 28, fontWeight: 600, color: "var(--text-primary)", textAlign: "center", letterSpacing: "-0.02em", lineHeight: 1.2 }}>The campus economy, built for Panthers</h1>
              <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.5, color: "var(--text-secondary)", textAlign: "center" }}>
                Post tasks, earn cash, catch rides, and resell — all with verified FIU students.
              </p>
            </div>
          )}

          {step === 1 && (
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <h1 style={{ margin: "20px 0 0", fontSize: 22, fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>Verify your FIU email</h1>
              <p style={{ margin: "8px 0 24px", fontSize: 15, lineHeight: 1.5, color: "var(--text-secondary)" }}>
                Only @fiu.edu addresses can join. We'll send a one-time code.
              </p>
              <Input label="FIU email" iconLeft="mail" placeholder="panther@fiu.edu" />
              <div style={{ display: "flex", gap: 10, padding: "16px 14px", marginTop: 20, background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12 }}>
                <Icon name="shield-check" size={20} color="var(--gold)" />
                <span style={{ fontSize: 13, lineHeight: 1.45, color: "var(--text-secondary)" }}>
                  FIU verification keeps PantherLoop students-only. Your email is never shown publicly.
                </span>
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <h1 style={{ margin: "20px 0 0", fontSize: 22, fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>Live selfie check</h1>
              <p style={{ margin: "8px 0 24px", fontSize: 15, lineHeight: 1.5, color: "var(--text-secondary)" }}>
                A quick selfie confirms you're a real person. This builds trust across every trade.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{
                  width: 220, height: 220, borderRadius: "50%",
                  border: "2px dashed var(--navy)", background: "rgba(11,31,75,0.04)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
                }}>
                  <Icon name="scan-face" size={56} color="var(--navy)" />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)" }}>Center your face</span>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div style={{ paddingTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
            <StepDots step={step} total={3} />
            <Button variant={step === 2 ? "accept" : "primary"} iconLeft={step === 2 ? "camera" : undefined} onClick={next}>
              {step === 0 ? "Get started" : step === 1 ? "Send code" : "Take selfie & finish"}
            </Button>
            {step === 0 && (
              <p style={{ margin: 0, textAlign: "center", fontSize: 13, color: "var(--text-secondary)" }}>
                Already have an account? <span style={{ color: "var(--navy)", fontWeight: 600 }}>Log in</span>
              </p>
            )}
          </div>
        </div>
      </ScrollArea>
    </PhoneFrame>
  );
}

window.Onboarding = Onboarding;
