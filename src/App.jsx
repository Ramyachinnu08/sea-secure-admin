import React, { useState, useEffect } from "react";

const MENU = [
  { section: "OVERVIEW", items: [{ id: "dashboard", label: "Dashboard", icon: "⊞" }] },
  { section: "FLEET", items: [{ id: "vessels", label: "Vessels", icon: "🚢" }, { id: "fleets", label: "Fleets", icon: "🚢" }] },
  { section: "INSPECTION CONFIG", items: [{ id: "questionbank", label: "Question Bank", icon: "❓" }, { id: "calibrary", label: "CA Library", icon: "📊" }, { id: "templates", label: "Templates", icon: "📄" }, { id: "knowledge", label: "AI Knowledge", icon: "🧠" }] },
  { section: "PROFILES", items: [{ id: "randomness", label: "Randomness", icon: "🔀" }, { id: "scoring", label: "Scoring", icon: "📈" }, { id: "aiprofiles", label: "AI Profiles", icon: "🤖" }, { id: "reportprofiles", label: "Report Profiles", icon: "📋" }] },
  { section: "OPERATIONS", items: [{ id: "assignments", label: "Assignments", icon: "📅" }, { id: "sessions", label: "Sessions", icon: "📝" }, { id: "reviewqueue", label: "Review Queue", icon: "👁" }] },
  { section: "OUTPUTS", items: [{ id: "reports", label: "Reports", icon: "📖" }, { id: "capatracker", label: "CAPA Tracker", icon: "✅" }, { id: "analytics", label: "Analytics", icon: "📉" }] },
  { section: "COMMUNICATIONS", items: [{ id: "emailtemplates", label: "Email Templates", icon: "✉️" }] },
  { section: "SYSTEM", items: [{ id: "platformtheme", label: "Platform Theme", icon: "🎨" }, { id: "users", label: "Users", icon: "👥" }, { id: "auditlog", label: "Audit Log", icon: "📜" }, { id: "settings", label: "Settings", icon: "⚙️" }] },
];

const BACKUP_CODES = ["45b9ec4b", "5e4465cf", "b6aff39f", "54c1e074", "758a6abe", "784bcac4", "b947835e", "00c6e333", "a54b63ed", "74b56169"];
const VESSEL_TYPES = ["—", "Tanker", "Bulk Carrier", "Container", "LNG Tanker", "LPG Tanker", "VLCC", "RoRo", "General Cargo", "Ammonia-Fueled"];

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 3 + 1.5,
  delay: Math.random() * 6,
  duration: Math.random() * 4 + 4,
  opacity: Math.random() * 0.5 + 0.15,
}));


function BG({ children, selectedFont, A }) {
  return (
    <div style={{
      minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", padding: 20,
      fontFamily: selectedFont+",'Segoe UI',sans-serif", overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=${selectedFont.replace(/ /g,"+")}:wght@400;500;600;700;800&display=swap');
        @keyframes slowZoom { 0%{transform:scale(1.0) translateX(0px)} 50%{transform:scale(1.06) translateX(-12px)} 100%{transform:scale(1.0) translateX(0px)} }
        @keyframes sunRay { 0%{opacity:0.0} 40%{opacity:1.0} 100%{opacity:0.0} }
        @keyframes shimmerH { 0%{transform:translateX(-100%)} 100%{transform:translateX(200%)} }
        @keyframes dustFloat { 0%{transform:translateY(0px) translateX(0px);opacity:0} 20%{opacity:1} 80%{opacity:0.6} 100%{transform:translateY(-60px) translateX(20px);opacity:0} }
        @keyframes loginFadeIn { from{opacity:0;transform:translateY(22px) scale(0.98)} to{opacity:1;transform:translateY(0) scale(1)} }
        .login-card-animate { animation: loginFadeIn 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
      `}</style>
      <div style={{ position:"absolute", inset:0, backgroundImage:"url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90')", backgroundSize:"cover", backgroundPosition:"center 55%", animation:"slowZoom 22s ease-in-out infinite", filter:"brightness(0.62) saturate(1.15) contrast(1.05)" }}/>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(175deg,rgba(8,14,38,0.72) 0%,rgba(20,12,8,0.45) 35%,rgba(30,16,6,0.38) 55%,rgba(6,10,30,0.80) 100%)" }}/>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(4,8,24,0.92) 0%,transparent 55%)" }}/>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(4,8,24,0.60) 0%,transparent 40%)" }}/>
      <div style={{ position:"absolute", top:"28%", left:"50%", transform:"translateX(-50%)", width:"900px", height:"420px", background:"radial-gradient(ellipse at center,rgba(255,160,40,0.28) 0%,rgba(255,100,20,0.12) 40%,transparent 75%)", pointerEvents:"none" }}/>
      {[{angle:-38,delay:0,dur:5},{angle:-22,delay:0.8,dur:6},{angle:-8,delay:0.3,dur:4.5},{angle:6,delay:1.2,dur:5.5},{angle:20,delay:0.6,dur:6},{angle:34,delay:1.5,dur:5}].map((r,i)=>(
        <div key={i} style={{ position:"absolute", top:"28%", left:"50%", width:"2px", height:"65vh", transformOrigin:"top center", transform:`rotate(${r.angle}deg)`, background:"linear-gradient(to bottom,rgba(255,190,80,0.22),transparent)", animation:`sunRay ${r.dur}s ease-in-out infinite`, animationDelay:`${r.delay}s`, pointerEvents:"none" }}/>
      ))}
      {PARTICLES.map(p=>(
        <div key={p.id} style={{ position:"absolute", left:`${p.left}%`, top:`${40+p.top*0.45}%`, width:`${p.size*0.8}px`, height:`${p.size*0.8}px`, borderRadius:"50%", background:p.id%4===0?"rgba(255,200,100,0.85)":p.id%4===1?"rgba(255,255,200,0.70)":p.id%4===2?"rgba(255,160,60,0.75)":"rgba(200,220,255,0.60)", boxShadow:p.id%2===0?`0 0 ${p.size*4}px rgba(255,170,60,0.55)`:`0 0 ${p.size*3}px rgba(255,230,150,0.40)`, animation:`dustFloat ${p.duration+2}s ease-in-out infinite`, animationDelay:`${p.delay}s`, pointerEvents:"none" }}/>
      ))}
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 110% 100% at 50% 50%,transparent 42%,rgba(2,5,18,0.72) 100%)", pointerEvents:"none" }}/>
      <div className="login-card-animate" style={{ position:"relative", zIndex:2, display:"flex", flexDirection:"column", alignItems:"center", width:"100%" }}>{children}</div>
    </div>
  );
}

function Logo({ title="RightKnots Admin", sub="Fleet inspection management", A }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginBottom:28 }}>
      <div style={{ width:80, height:80, borderRadius:22, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18, overflow:"hidden", boxShadow:"0 8px 40px rgba(255,120,20,0.25)" }}>
        <img src="https://i.ibb.co/MDqJQhv9/27453318-8b7f-442d-88ca-5b69007d4e03.png" alt="RightKnots" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
      </div>
      <div style={{ fontSize:24, fontWeight:800, color:"#fff", letterSpacing:"-0.02em", textShadow:"0 2px 16px rgba(0,0,0,0.5)" }}>{title}</div>
      <div style={{ fontSize:13, color:"rgba(255,210,140,0.75)", marginTop:6, letterSpacing:"0.06em", fontWeight:500 }}>{sub}</div>
    </div>
  );
}

function Card({ children, maxWidth=480 }) {
  return (
    <div style={{ background:"rgba(255,255,255,0.96)", borderRadius:20, padding:"34px 38px", width:"100%", maxWidth, boxShadow:"0 32px 80px rgba(0,0,0,0.45)", backdropFilter:"blur(16px)", border:"1px solid rgba(255,255,255,0.18)" }}>{children}</div>
  );
}

function ResetPasswordForm({ API, P, A, onDone, onBack }) {
  const [pw, setPw] = React.useState("");
  const [pw2, setPw2] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [err, setErr] = React.useState("");

  const submit = async () => {
    setErr("");
    if (!pw || !pw2) { setErr("Please fill in both fields"); return; }
    if (pw !== pw2) { setErr("Passwords do not match"); return; }
    if (pw.length < 6) { setErr("Password must be at least 6 characters"); return; }
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) { setErr("Invalid reset link"); return; }
    setBusy(true);
    try {
      const r = await fetch(`${API}/auth/reset-password`, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ token, new_password: pw }) });
      const d = await r.json();
      setBusy(false);
      if (d.success) { alert("Password reset successfully! You can now sign in."); window.history.replaceState({},"",window.location.pathname); onDone(); }
      else { setErr(d.message || "Reset failed"); }
    } catch(e) { setBusy(false); setErr("Cannot connect to server"); }
  };

  return (
    <div>
      <h2 style={{ fontSize:20, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Reset password</h2>
      <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:24 }}>Enter your new password below.</p>
      <div style={{ marginBottom:16 }}>
        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>New password</label>
        <input value={pw} onChange={e=>setPw(e.target.value)} type="password" placeholder="At least 6 characters" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, color:"#2E1F12", fontFamily:"inherit", outline:"none", boxSizing:"border-box" }}/>
      </div>
      <div style={{ marginBottom:20 }}>
        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Confirm new password</label>
        <input value={pw2} onChange={e=>setPw2(e.target.value)} type="password" placeholder="Re-enter password" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, color:"#2E1F12", fontFamily:"inherit", outline:"none", boxSizing:"border-box" }}/>
      </div>
      {err && <p style={{ color:"#ef4444", fontSize:13, marginBottom:14 }}>{err}</p>}
      <button onClick={submit} disabled={busy} style={{ width:"100%", padding:"14px", background:P, color:"#fff", border:"none", borderRadius:8, fontSize:15, fontWeight:700, cursor:"pointer", marginBottom:14, fontFamily:"inherit", opacity:busy?0.6:1 }}>{busy?"Updating…":"Update Password"}</button>
      <div style={{ textAlign:"center" }}><span onClick={onBack} style={{ color:A, fontSize:14, fontWeight:600, cursor:"pointer" }}>Back to Sign In</span></div>
    </div>
  );
}

function ModalOverlay({ title, subtitle, children, onClose, maxWidth=480 }) {
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:300, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
      <div style={{ background:"#FDF8ED", borderRadius:16, padding:"28px 32px", width:"100%", maxWidth, boxShadow:"0 20px 60px rgba(0,0,0,0.3)", position:"relative", maxHeight:"90vh", overflowY:"auto" }}>
        <button onClick={onClose} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
        <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:6 }}>{title}</h3>
        {subtitle&&<p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const getInitialScreen = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resetToken = urlParams.get('token');
    if(resetToken) return "newpassword";
    const savedToken = localStorage.getItem("token");
    // Clear old dummy tokens - force real login
    if(savedToken === "dummy-token"){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return "signin";
    }
    if(savedToken) return "app";
    return "signin";
  };
  const [screen, setScreen] = useState(getInitialScreen);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [activePage, setActivePage] = useState("dashboard");
  const [knowledgeDocs, setKnowledgeDocs] = useState([]);
  const [kbTitle, setKbTitle] = useState("");
  const [kbText, setKbText] = useState("");
  const [kbBusy, setKbBusy] = useState(false);
  const loadKnowledge = () => {
    fetch(`${API}/api/rag/documents`,{headers:authHeader()}).then(r=>r.json()).then(d=>{ if(d.success) setKnowledgeDocs(d.documents||[]); }).catch(()=>{});
  };
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [vessels, setVessels] = useState([]);
  const [vesselSearch, setVesselSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All statuses");
  const [fleetFilter, setFleetFilter] = useState("All fleets");
  const [statusOpen, setStatusOpen] = useState(false);
  const [fleetOpen, setFleetOpen] = useState(false);
  const [showAddVessel, setShowAddVessel] = useState(false);
  const [vesselMenuOpen, setVesselMenuOpen] = useState(null);
  const [assignMenuOpen, setAssignMenuOpen] = useState(null);
  const [auditLog, setAuditLog] = useState([]);
  const [dashboardStats, setDashboardStats] = useState({});
  const [reviewReports, setReviewReports] = useState([]);
  const [approvedReports, setApprovedReports] = useState([]);
  const [capaList, setCapaList] = useState([]);
  const [sessionsList, setSessionsList] = useState([]);
  const [selectedVessel, setSelectedVessel] = useState(null);
  const [newVessel, setNewVessel] = useState({ name: "", imo: "", type: "—", flag: "", operator: "", buildYear: "", fleet: "No fleet", notes: "" });

  const [fleets, setFleets] = useState([]);
  const [fleetSearch, setFleetSearch] = useState("");
  const [showAddFleet, setShowAddFleet] = useState(false);
  const [fleetMenuOpen, setFleetMenuOpen] = useState(null);
  const [showEditFleet, setShowEditFleet] = useState(false);
  const [editFleetData, setEditFleetData] = useState(null);
  const [newFleetName, setNewFleetName] = useState("");
  const [newFleetRegion, setNewFleetRegion] = useState("");
  const [selectedFleet, setSelectedFleet] = useState(null);

  const [modal, setModal] = useState(null);
  const [totpEnabled, setTotpEnabled] = useState(false);
  const [verifyInput, setVerifyInput] = useState("");
  const [totpSecret, setTotpSecret] = useState("");
  const [totpUri, setTotpUri] = useState("");
  const [currentPw, setCurrentPw] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [resetPw, setResetPw] = useState("");
  const [resetPw2, setResetPw2] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [passkeyName, setPasskeyName] = useState("");
  const [passkeys, setPasskeys] = useState([]);
  const [realBackupCodes, setRealBackupCodes] = useState([]);
  const [showCurrPw, setShowCurrPw] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);

  const [randomnessProfiles, setRandomnessProfiles] = useState([]);
  const [randSearch, setRandSearch] = useState("");
  const [showHowToRand, setShowHowToRand] = useState(false);
  const [showAddProfile, setShowAddProfile] = useState(false);
  const [randStep, setRandStep] = useState(1);
  const [randMenuOpen, setRandMenuOpen] = useState(null);
  const [randProfile, setRandProfile] = useState({
    name:"", description:"", appliesTo:"All Vessel Types", selectionTiming:"On Inspection Start",
    minPerCategory:1, minPerSubArea:1, mustInclude:"Always Include (guaranteed)",
    baseWeightSource:"Question Weight (from template)", severityMultiplier:1.5, evidenceBoost:20, vesselRiskBoost:30,
    antiRepeat:false, antiRepeatScope:"Per Vessel", windowSize:3, penaltyStrength:50,
    followUps:false, followUpRules:{ anyFail:true, criticalFail:true, evidenceMissing:false },
    simTemplate:"", simVessel:"", simResults:null
  });
  const [randDropOpen, setRandDropOpen] = useState(null);
  const [showEditRandProfile, setShowEditRandProfile] = useState(false);
  const [editRandProfile, setEditRandProfile] = useState(null);
  const [editRandStep, setEditRandStep] = useState(1);

  // Report Profiles state
  const [reportProfiles, setReportProfiles] = useState([]);
  const [reportSearch, setReportSearch] = useState("");
  const [showHowToReport, setShowHowToReport] = useState(false);
  const [showAddReport, setShowAddReport] = useState(false);
  const [reportStep, setReportStep] = useState(1);
  const [reportMenuOpen, setReportMenuOpen] = useState(null);
  const [newReport, setNewReport] = useState({ name:"", description:"", tone:"Neutral", titleFormat:"Numbered", includeObservation:true, includeEvidence:true, includeRisk:true, includeRecommendation:true, includeDueDate:true, autoGenerateTitles:false, branding:"", sections:["Cover Page","Executive Summary","Findings","Corrective Actions","Evidence Index","Sign-Off"] });
  const [scoringProfiles, setScoringProfiles] = useState([]);
  const [scoringSearch, setScoringSearch] = useState("");
  const [showHowToScoring, setShowHowToScoring] = useState(false);
  const [showAddScoringProfile, setShowAddScoringProfile] = useState(false);
  const [scoringStep, setScoringStep] = useState(1);
  const [scoringMenuOpen, setScoringMenuOpen] = useState(null);
  const [newScoringProfile, setNewScoringProfile] = useState({ name:"", description:"", method:"Weighted Pass Percentage", passThreshold:90, conditional:75, excludeNA:true, notObservedAsFail:false, criticalOverride:true, evidenceDowngrade:true, majorFailOverride:false, majorFailCount:5 });

  const [aiProfiles, setAiProfiles] = useState([]);
  const [aiSearch, setAiSearch] = useState("");
  const [showHowToAI, setShowHowToAI] = useState(false);
  const [showAddAI, setShowAddAI] = useState(false);
  const [aiStep, setAiStep] = useState(1);
  const [aiMenuOpen, setAiMenuOpen] = useState(null);
  const [aiDropOpen, setAiDropOpen] = useState(null);
  const [newAI, setNewAI] = useState({
    name:"", description:"", advisoryOnly:true,
    visionModel:"Vision v2 (Standard)", ocrExtraction:false, llmSummary:true,
    autoAttachAt:0.85, reviewWhenBelow:0.60,
    reviewCritical:true, reviewMajor:false, reviewDisagreement:true, reviewMissingEvidence:true
  });

  const [templates, setTemplates] = useState([]);
  const [tmplSearch, setTmplSearch] = useState("");
  const [showHowToTmpl, setShowHowToTmpl] = useState(false);
  const [showCreateTemplate, setShowCreateTemplate] = useState(false);
  const [newTmpl, setNewTmpl] = useState({ name:"", description:"" });
  const [tmplMenuOpen, setTmplMenuOpen] = useState(null);
  const [showEditTemplate, setShowEditTemplate] = useState(false);
  const [editTmplData, setEditTmplData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showNewDraft, setShowNewDraft] = useState(false);
  const [newDraftVersion, setNewDraftVersion] = useState("1.0");
  const [selectedDraft, setSelectedDraft] = useState(null);
  const [builderTab, setBuilderTab] = useState("Structure");
  const [tmplStructure, setTmplStructure] = useState([]);
  const [qbBuilderSearch, setQbBuilderSearch] = useState("");
  const [scopeMode, setScopeMode] = useState("Standard");
  const [scopeModeOpen, setScopeModeOpen] = useState(false);
  const [scoringProfile, setScoringProfile] = useState("");
  const [aiProfile, setAiProfile] = useState("");
  const [reportProfile, setReportProfile] = useState("");
  const [showHowToBuilder, setShowHowToBuilder] = useState(false);

  const [caTemplates, setCaTemplates] = useState([]);
  const [caSearch, setCaSearch] = useState("");
  const [caStatus, setCaStatus] = useState("Active");
  const [caSeverity, setCaSeverity] = useState("Any severity");
  const [caTagFilter, setCaTagFilter] = useState("");
  const [caStatusOpen, setCaStatusOpen] = useState(false);
  const [caSevOpen, setCaSevOpen] = useState(false);
  const [showHowTo, setShowHowTo] = useState(false);
  const [showAddCA, setShowAddCA] = useState(false);
  const [newCA, setNewCA] = useState({ title:"", description:"", severities:[], dueDays:"", tags:"" });
  const [newCASevOpen, setNewCASevOpen] = useState(false);
  const [caMenuOpen, setCaMenuOpen] = useState(null);
  const [showEditCA, setShowEditCA] = useState(false);
  const [editCAData, setEditCAData] = useState(null);
  const [editCASevOpen, setEditCASevOpen] = useState(false);

  const [questions, setQuestions] = useState([]);
  const [qbSearch, setQbSearch] = useState("");
  const [qbCategoryFilter, setQbCategoryFilter] = useState("All categories");
  const [qbSeverityFilter, setQbSeverityFilter] = useState("All severities");
  const [qbTypeFilter, setQbTypeFilter] = useState("All types");
  const [qbCatOpen, setQbCatOpen] = useState(false);
  const [qbSevOpen, setQbSevOpen] = useState(false);
  const [qbTypeOpen, setQbTypeOpen] = useState(false);
  const [qbPerPage, setQbPerPage] = useState(25);
  const [qbPage, setQbPage] = useState(1);
  const [qbPerPageOpen, setQbPerPageOpen] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [qbMenuOpen, setQbMenuOpen] = useState(null);
  const [qbSelected, setQbSelected] = useState(new Set());
  const [qbDeleting, setQbDeleting] = useState(false);
  const [showEditQuestion, setShowEditQuestion] = useState(false);
  const [editQData, setEditQData] = useState(null);
  const [aiParamsQuestion, setAiParamsQuestion] = useState(null);
  const [newQ, setNewQ] = useState({ text:"", subNumber:"", category:"Deck", subArea:"", type:"Binary (Yes/No)", severity:"Medium", weight:"1", evidenceRequired:false, evidenceType:"Photo", requireOnline:false, inspectionGuide:"" });
  const [aiHowToOpen, setAiHowToOpen] = useState(true);
  const [aiP, setAiP] = useState({ evidenceType:"Photo", ocrRequired:false, objectPresenceList:"", conditionClassification:"", acceptableRanges:"", autoAcceptAbove:"0.95", flagBelowReview:"0.70", routingRules:[], suggestedCAs:[], newRuleCondition:"", newRuleReviewer:"", selectedCA:"" });

  // Bulk upload state
  const [showBulkPreview, setShowBulkPreview] = useState(false);
  const [showBulkResult, setShowBulkResult] = useState(false);
  const [bulkPreviewRows, setBulkPreviewRows] = useState([]);
  const [bulkErrors, setBulkErrors] = useState([]);
  const [bulkResult, setBulkResult] = useState({ inserted:0, skipped:0, errors:[] });

  const [showCreateAssignment, setShowCreateAssignment] = useState(false);
  const [showViewReports, setShowViewReports] = useState(false);
  const [showCorrectiveActions, setShowCorrectiveActions] = useState(false);
  const [showEditVessel, setShowEditVessel] = useState(false);
  const [editVesselData, setEditVesselData] = useState(null);
  const [assignmentForm, setAssignmentForm] = useState({ inspector: "", date: "", type: "", notes: "" });
  const [assignments, setAssignments] = useState([]);
  const [assignmentStatusFilter, setAssignmentStatusFilter] = useState("All statuses");
  const [assignmentInspectorFilter, setAssignmentInspectorFilter] = useState("All inspectors");
  const [assignmentFleetFilter, setAssignmentFleetFilter] = useState("All fleets");
  const [assignmentDateFrom, setAssignmentDateFrom] = useState("");
  const [assignmentDateTo, setAssignmentDateTo] = useState("");
  const [assignmentStatusOpen, setAssignmentStatusOpen] = useState(false);
  const [assignmentInspectorOpen, setAssignmentInspectorOpen] = useState(false);
  const [assignmentFleetOpen, setAssignmentFleetOpen] = useState(false);
  const [showHowToAssignment, setShowHowToAssignment] = useState(false);
  const [newAssignment, setNewAssignment] = useState({ vessel:"", templateVersion:"", inspector:"", dueDate:"", notes:"" });

  // Sessions state
  const [sessions, setSessions] = useState([]);
  const [sessionSearch, setSessionSearch] = useState("");
  const [sessionStatusFilter, setSessionStatusFilter] = useState("All statuses");
  const [sessionInspectorFilter, setSessionInspectorFilter] = useState("All inspectors");
  const [sessionFleetFilter, setSessionFleetFilter] = useState("All fleets");
  const [sessionVesselFilter, setSessionVesselFilter] = useState("All vessels");
  const [sessionDateFrom, setSessionDateFrom] = useState("");
  const [sessionDateTo, setSessionDateTo] = useState("");
  const [sessionStatusOpen, setSessionStatusOpen] = useState(false);
  const [sessionInspectorOpen, setSessionInspectorOpen] = useState(false);
  const [sessionFleetOpen, setSessionFleetOpen] = useState(false);
  const [sessionVesselOpen, setSessionVesselOpen] = useState(false);
  const [showHowToSessions, setShowHowToSessions] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [sessionTab, setSessionTab] = useState("Overview");
  const [sessionDetail, setSessionDetail] = useState(null);

  // Review Queue state
  const [reviewQueue, setReviewQueue] = useState([]);
  const [showHowToReview, setShowHowToReview] = useState(false);
  const [showHowToReports, setShowHowToReports] = useState(false);

  // CAPA Tracker state
  const [capaActions, setCapaActions] = useState([]);
  const [capaSearch, setCapaSearch] = useState("");
  const [capaStatusFilter, setCapaStatusFilter] = useState("All statuses");
  const [capaFleetFilter, setCapaFleetFilter] = useState("All fleets");
  const [capaVesselFilter, setCapaVesselFilter] = useState("All vessels");
  const [capaSeverityFilter, setCapaSeverityFilter] = useState("All");
  const [capaOverdueOnly, setCapaOverdueOnly] = useState(false);
  const [capaPerPage, setCapaPerPage] = useState(10);
  const [showHowToCapa, setShowHowToCapa] = useState(false);
  const [showCreateCapa, setShowCreateCapa] = useState(false);
  const [capaCreateMode, setCapaCreateMode] = useState("library");
  const [newCapa, setNewCapa] = useState({ session:"", libraryTemplate:"", customTitle:"", customDesc:"", severity:"minor", dueDate:"", assignee:"Unassigned" });

  // Analytics state
  const [showHowToAnalytics, setShowHowToAnalytics] = useState(false);
  const [analyticsRange, setAnalyticsRange] = useState("Last 30 days");
  const [analyticsData, setAnalyticsData] = useState(null);
  const [analyticsDateFrom, setAnalyticsDateFrom] = useState("26-02-2026");
  const [analyticsDateTo, setAnalyticsDateTo] = useState("28-03-2026");
  const [topVesselsMetric, setTopVesselsMetric] = useState("Findings");

  // Platform Theme state
  const [selectedPalette, setSelectedPalette] = useState("RightKnots Maritime");
  const [selectedFont, setSelectedFont] = useState("Outfit");
  const [logoHeight, setLogoHeight] = useState(3);
  const [brandTextSize, setBrandTextSize] = useState(1.5);
  const [customPrimary, setCustomPrimary] = useState("228  55%  22%");
  const [customAccent, setCustomAccent] = useState("18  100%  58%");
  const [colourMode, setColourMode] = useState("HSL");

  // Users state
  const [usersTab, setUsersTab] = useState("Admins");
  const [usersSearch, setUsersSearch] = useState("");
  const [usersMenuOpen, setUsersMenuOpen] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [inspectors, setInspectors] = useState([]);
  const [showAddInspector, setShowAddInspector] = useState(false);
  const [newInspector, setNewInspector] = useState({name:"", email:""});

  // Settings state
  const [settingsOrg, setSettingsOrg] = useState({name:"", logoUrl:"", contactEmail:""});
  const [settingsDefaultProfiles, setSettingsDefaultProfiles] = useState({randomness:"None", scoring:"None", ai:"None", report:"None"});
  const [settingsNotifications, setSettingsNotifications] = useState({emailSubmission:false, emailReady:false, emailOverdue:false, slack:false});

  const API = "http://127.0.0.1:8000";
  const getToken = () => localStorage.getItem("token") || "";
  const authHeader = () => ({ "Content-Type":"application/json", "Authorization": `Bearer ${getToken()}` });
  const saveTemplateToBackend = (t) => {
    fetch(`${API}/api/admin/templates/${t.id}`,{method:"PATCH",headers:authHeader(),body:JSON.stringify({name:t.name,description:t.description,version:String(t.version||"1.0"),sections:{status:t.status,drafts:t.drafts||0,draftVersions:t.draftVersions||[]}})}).catch(()=>{});
  };

  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const resetToken = urlParams.get('token');
    if(resetToken){ setScreen("newpassword"); return; }
    const authToken = localStorage.getItem("token");
    if(!authToken){ setScreen("signin"); return; }
    setScreen("app");
    // Load real data from backend
    const hdr = { "Authorization": `Bearer ${authToken}` };
    // Fleets + Vessels (fleets first so we can map fleet names)
    fetch(`${API}/api/admin/fleets`,{headers:hdr}).then(r=>{
      if(r.status===401){ localStorage.clear(); setScreen("signin"); throw new Error("session expired"); }
      return r.json();
    }).then(fd=>{
      const fleetList = fd.success ? fd.data.map(f=>({...f, region:f.description, vessels:[], vessel_count:f.vessel_count||0})) : [];
      setFleets(fleetList);
      fetch(`${API}/api/admin/vessels`,{headers:hdr}).then(r=>r.json()).then(vd=>{
        if(vd.success) setVessels(vd.data.map(v=>({
          id:v.id, name:v.name, imo:v.imo, type:v.type||"—", flag:v.flag||"—",
          operator:v.operator||"—", build_year:v.build_year, status:"active",
          fleet:(fleetList.find(f=>f.id===v.fleet_id)||{}).name||"—",
        })));
      }).catch(()=>{});
    }).catch(()=>{});
    // Question Bank
    fetch(`${API}/api/admin/questions`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success) setQuestions(d.data.map(q=>({
        ...q, text:q.question||"", subNumber:q.sub_number||"", subArea:q.sub_area||"",
        inspectionGuide:q.guide_to_inspection||"", evidenceRequired:q.evidence_required,
      })));
    }).catch((e)=>{ console.log("questions load error", e); });
    // Passkeys
    fetch(`${API}/auth/passkeys/list`,{headers:hdr}).then(r=>r.json()).then(d=>{ if(d.success&&d.passkeys) setPasskeys(d.passkeys); }).catch(()=>{});
    // Knowledge documents (RAG)
    fetch(`${API}/api/rag/documents`,{headers:hdr}).then(r=>r.json()).then(d=>{ if(d.success) setKnowledgeDocs(d.documents||[]); }).catch(()=>{});
    // Templates
    fetch(`${API}/api/admin/templates`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success) setTemplates(d.data.map(t=>({
        id:t.id, name:t.name, description:t.description, version:t.version,
        status:(t.sections&&t.sections.status)||"Draft",
        drafts:(t.sections&&t.sections.drafts)||0,
        draftVersions:(t.sections&&t.sections.draftVersions)||[],
      })));
    }).catch(()=>{});
    // CA Library
    fetch(`${API}/api/admin/ca-library`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success && d.data.length) setCaTemplates(d.data.map(c=>({
        id:c.id, title:c.title, description:c.description||"",
        severities:c.severity?c.severity.split(","):[], tags:c.category||"",
        dueDays:"", status:"Active",
      })));
    }).catch(()=>{});
    // Profiles (randomness, scoring, ai, report)
    fetch(`${API}/api/admin/profiles`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success){
        const byKind = k => d.data.filter(p=>p.kind===k).map(p=>({id:p.id,name:p.name,...(p.data||{})}));
        setRandomnessProfiles(byKind("randomness"));
        setScoringProfiles(byKind("scoring"));
        setAiProfiles(byKind("ai"));
        setReportProfiles(byKind("report"));
      }
    }).catch(()=>{});
    // Inspectors
    fetch(`${API}/api/auth/inspectors`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success) setInspectors(d.data.map(i=>({...i, status:"active"})));
    }).catch(()=>{});
    // Assignments
    fetch(`${API}/api/admin/assignments`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success) setAssignments(d.data);
    }).catch(()=>{});
    // Audit Log
    fetch(`${API}/api/admin/audit-log`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success) setAuditLog(d.data);
    }).catch(()=>{});
    // Dashboard stats
    fetch(`${API}/api/admin/dashboard`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success) setDashboardStats(d.data);
    }).catch(()=>{});
    // Reports (all)
    fetch(`${API}/api/admin/reports`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success){
        setReviewReports(d.data.filter(r=>r.status==="pending_review"));
        setApprovedReports(d.data.filter(r=>r.status==="approved"));
      }
    }).catch(()=>{});
    // CAPAs
    fetch(`${API}/api/admin/capas`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success) setCapaList(d.data);
    }).catch(()=>{});
    // Sessions
    fetch(`${API}/api/admin/sessions`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success) setSessionsList(d.data);
    }).catch(()=>{});
    fetch(`${API}/api/settings/general`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success && d.data){
        if(d.data.org) setSettingsOrg(d.data.org);
        if(d.data.defaultProfiles) setSettingsDefaultProfiles(d.data.defaultProfiles);
        if(d.data.notifications) setSettingsNotifications(d.data.notifications);
      }
    }).catch(()=>{});
    fetch(`${API}/api/analytics`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success) setAnalyticsData(d.data);
    }).catch(()=>{});
    fetch(`${API}/api/settings/theme`,{headers:hdr}).then(r=>r.json()).then(d=>{
      if(d.success && d.data){
        if(d.data.palette) setSelectedPalette(d.data.palette);
        if(d.data.font) setSelectedFont(d.data.font);
      }
    }).catch(()=>{});
    // Admins (current user)
    const me = JSON.parse(localStorage.getItem("user")||"{}");
    setAdmins([{id:me.id||"1", name:me.name||"Admin", email:me.email||"", role:me.role||"admin", status:"active"}]);
  }, []);

  const PALETTES = {
    "RightKnots Maritime": { primary:"#3A1D0C", accent:"#E8630A" },
    "Navy & Orange":      { primary:"#1a2a5e", accent:"#FF6B00" },
    "Ocean & Coral":      { primary:"#0e4d6e", accent:"#e05a3a" },
    "Forest & Gold":      { primary:"#1a4d2e", accent:"#e8a020" },
    "Slate & Violet":     { primary:"#383d44", accent:"#7c3aed" },
    "Midnight & Teal":    { primary:"#151f3d", accent:"#1a9e8e" },
    "Charcoal & Rose":    { primary:"#313539", accent:"#e0445a" },
  };
  const theme = PALETTES[selectedPalette] || PALETTES["RightKnots Maritime"];
  const P = theme.primary;
  const A = theme.accent;
  const [selectedReview, setSelectedReview] = useState(null);

  const pwRules = [
    { label: "8+ characters", test: p => p.length >= 8 },
    { label: "Uppercase letter", test: p => /[A-Z]/.test(p) },
    { label: "Lowercase letter", test: p => /[a-z]/.test(p) },
    { label: "Number", test: p => /[0-9]/.test(p) },
    { label: "Special character", test: p => /[^A-Za-z0-9]/.test(p) },
  ];

  const filteredVessels = vessels.filter(v => {
    const matchSearch = v.name.toLowerCase().includes(vesselSearch.toLowerCase()) || v.imo.toLowerCase().includes(vesselSearch.toLowerCase());
    const matchStatus = statusFilter === "All statuses" || v.status === statusFilter;
    const matchFleet = fleetFilter === "All fleets" || v.fleet === fleetFilter;
    return matchSearch && matchStatus && matchFleet;
  });

  const addVessel = async () => {
    if (!newVessel.name) return;
    try{
      const fleet = fleets.find(f=>f.name===newVessel.fleet);
      const r = await fetch(`${API}/api/admin/vessels`,{method:"POST",headers:authHeader(),body:JSON.stringify({name:newVessel.name,imo:newVessel.imo,type:newVessel.type,flag:newVessel.flag,operator:newVessel.operator,build_year:newVessel.buildYear?parseInt(newVessel.buildYear):null,fleet_id:fleet?fleet.id:null})});
      if(r.status===401){ alert("Session expired. Please login again."); localStorage.clear(); setScreen("signin"); return; }
      const d = await r.json();
      if(d.success){ setVessels(prev=>[...prev,{...d.data,fleet:newVessel.fleet}]); setNewVessel({name:"",imo:"",type:"—",flag:"",operator:"",buildYear:"",fleet:"No fleet",notes:""}); setShowAddVessel(false); }
      else { alert(d.message || "Could not add vessel"); }
    }catch(e){ alert("Error connecting to server"); }
  };


  const HowToUse = ({ show, onToggle, sections = [] }) => (
    <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
      <button onClick={onToggle} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:600, color:"#4A3624" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          How to use
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{show?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
      </button>
      {show && (
        <div style={{ padding:"0 24px 24px", borderTop:"1px solid #f3f4f6" }}>
          {sections.map((sec,i)=>(
            <div key={i} style={{ paddingTop:16 }}>
              {sec.title&&<p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:6, display:"flex", alignItems:"center", gap:8 }}>{sec.icon&&<span>{sec.icon}</span>}{sec.title}</p>}
              {sec.text&&<p style={{ fontSize:14, color:"#4A3624", marginBottom:10, lineHeight:1.6 }}>{sec.text}</p>}
              {sec.items&&<ul style={{ margin:"0 0 10px", paddingLeft:20 }}>{sec.items.map((item,j)=><li key={j} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{item}</li>)}</ul>}
              {sec.presets&&sec.presets.map(([label,desc],j)=><div key={j} style={{ fontSize:13, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong>{label}</strong> {desc}</div>)}
            </div>
          ))}
        </div>
      )}
    </div>
  );



  const inputStyle = { width:"100%", padding:"10px 14px", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, color:"#2E1F12", fontFamily:"inherit", outline:"none", boxSizing:"border-box" };
  const selectStyle = { ...inputStyle, cursor:"pointer", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", paddingRight:36 };
  const inputStyle2 = inputStyle;
  const selectStyle2 = selectStyle;

  if (screen==="signin") return (
    <BG selectedFont={selectedFont} A={A}>
      <Logo A={A}/>
      <div style={{ background:"rgba(255,255,255,0.96)", borderRadius:20, padding:"34px 38px", width:"100%", maxWidth:480, boxShadow:"0 32px 80px rgba(0,0,0,0.45)", backdropFilter:"blur(16px)", border:"1px solid rgba(255,255,255,0.18)" }}>
        <h2 style={{ fontSize:22, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Sign In</h2>
        <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:24 }}>Access the administration portal</p>
        <div style={{ marginBottom:16 }}>
          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Email</label>
          <div style={{ display:"flex", alignItems:"center", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"11px 14px", gap:10 }}>
            <span style={{ color:"#B59D7E" }}>✉</span>
            <input
              value={loginEmail}
              onChange={e=>setLoginEmail(e.target.value)}
              type="email"
              placeholder="admin@example.com"
              style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}
            />
          </div>
        </div>
        <div style={{ marginBottom:8 }}>
          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Password</label>
          <div style={{ display:"flex", alignItems:"center", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"11px 14px", gap:10 }}>
            <span style={{ color:"#B59D7E" }}>🔒</span>
            <input
              value={loginPassword}
              onChange={e=>setLoginPassword(e.target.value)}
              placeholder="Enter password"
              type={showPw?"text":"password"}
              style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}
            />
            <span onClick={()=>setShowPw(!showPw)} style={{ cursor:"pointer", color:"#B59D7E" }}>{showPw?"🙈":"👁"}</span>
          </div>
        </div>
        {loginError&&<div style={{ color:"#ef4444", fontSize:13, marginBottom:10, marginTop:8 }}>{loginError}</div>}
        <button
          disabled={loginLoading}
          onClick={async()=>{
            if(!loginEmail||!loginPassword){setLoginError("Email and password required");return;}
            setLoginLoading(true);setLoginError("");
            try{
              const res = await fetch(`${API}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: loginEmail, password: loginPassword }),
              });
              const d = await res.json();
              if(res.ok && d.access_token){
                localStorage.setItem("token", d.access_token);
                localStorage.setItem("user", JSON.stringify(d.user));
                window.location.reload();
              } else {
                setLoginError(d.detail || "Invalid email or password");
              }
            }catch(e){
              setLoginError("Cannot connect to server. Make sure backend is running.");
            }
            setLoginLoading(false);
          }}
          style={{ width:"100%", padding:"14px", background:P, color:"#fff", border:"none", borderRadius:8, fontSize:16, fontWeight:700, cursor:"pointer", marginTop:20, marginBottom:14, fontFamily:"inherit", opacity:loginLoading?0.7:1 }}
        >{loginLoading?"Signing in...":"Sign In"}</button>
        <div style={{ textAlign:"center" }}>
          <span onClick={()=>setScreen("forgot")} style={{ color:A, fontSize:14, fontWeight:600, cursor:"pointer" }}>Forgot password?</span>
        </div>
      </div>
    </BG>
  );

  if (screen==="forgot") return (
    <BG selectedFont={selectedFont} A={A}><Logo title="Forgot Password" sub="Admin Portal" A={A}/>
      <Card maxWidth={460}>
        <h2 style={{ fontSize:20, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Reset your password</h2>
        <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:24 }}>Enter your email to receive a reset link.</p>
        <div style={{ marginBottom:20 }}>
          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Email</label>
          <div style={{ display:"flex", alignItems:"center", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"11px 14px", gap:10 }}>
            <span style={{ color:"#B59D7E" }}>✉</span>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
          </div>
        </div>
        <button onClick={async()=>{
          if(!email) return;
          try{
            const r=await fetch(`${API}/auth/forgot-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email})});
            const d=await r.json();
            if(d.success){
              if(d.reset_link){ alert("Email not configured. Reset link (for testing):\n\n"+d.reset_link); }
              setScreen("resetSent");
            }
          }catch(e){ alert("Cannot connect to server"); }
        }} style={{ width:"100%", padding:"14px", background:P, color:"#fff", border:"none", borderRadius:8, fontSize:15, fontWeight:700, cursor:"pointer", marginBottom:14, fontFamily:"inherit" }}>Send Reset Link</button>
        <div style={{ textAlign:"center" }}><span onClick={()=>setScreen("signin")} style={{ color:A, fontSize:14, fontWeight:600, cursor:"pointer" }}>Back to Sign In</span></div>
      </Card>
    </BG>
  );

  if (screen==="resetSent") return (
    <BG selectedFont={selectedFont} A={A}><Logo title="Forgot Password" sub="Admin Portal" A={A}/>
      <Card maxWidth={460}>
        <h2 style={{ fontSize:20, fontWeight:800, color:"#2E1F12", marginBottom:8 }}>Reset your password</h2>
        <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:28 }}>If an account exists, check your email for the reset link.</p>
        <button onClick={()=>setScreen("signin")} style={{ width:"100%", padding:"14px", background:"#FDF8ED", color:"#2E1F12", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>Back to Sign In</button>
      </Card>
    </BG>
  );

  if (screen==="newpassword") return (
    <BG selectedFont={selectedFont} A={A}><Logo title="Set New Password" sub="Admin Portal" A={A}/>
      <Card maxWidth={460}>
        <ResetPasswordForm API={API} P={P} A={A}
          onDone={()=>{ setScreen("signin"); }}
          onBack={()=>{ window.history.replaceState({},"",window.location.pathname); setScreen("signin"); }} />
      </Card>
    </BG>
  );

  const Sidebar = () => (
    <div style={{ width:240, minHeight:"100vh", background:P, display:"flex", flexDirection:"column", position:"fixed", left:0, top:0, bottom:0, overflowY:"auto" }}>
      <div style={{ padding:"20px 16px 16px", display:"flex", flexDirection:"column", alignItems:"center", borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ width:logoHeight*18, height:logoHeight*18, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:8, overflow:"hidden" }}>
          <img src="https://i.ibb.co/MDqJQhv9/27453318-8b7f-442d-88ca-5b69007d4e03.png" alt="RightKnots" style={{ width:"100%", height:"100%", objectFit:"contain" }}/>
        </div>
        <span style={{ fontSize:`${brandTextSize*0.6}rem`, fontWeight:700, color:"#C49A6C", letterSpacing:"0.1em" }}>ADMIN</span>
      </div>
      <div style={{ flex:1, padding:"12px 0" }}>
        {MENU.map(group=>(
          <div key={group.section} style={{ marginBottom:8 }}>
            <div style={{ fontSize:10, fontWeight:700, color:"#475569", letterSpacing:"0.1em", padding:"8px 16px 4px" }}>{group.section}</div>
            {group.items.map(item=>(
              <button key={item.id} onClick={()=>{ setActivePage(item.id); setSelectedVessel(null); }}
                style={{ width:"100%", display:"flex", alignItems:"center", gap:10, padding:"10px 16px", background:activePage===item.id?`${A}26`:"transparent", border:"none", borderLeft:`3px solid ${activePage===item.id?A:"transparent"}`, color:activePage===item.id?A:"#C49A6C", fontSize:14, fontWeight:activePage===item.id?600:400, cursor:"pointer", textAlign:"left", fontFamily:"inherit" }}>
                <span style={{ fontSize:16 }}>{item.icon}</span>{item.label}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div style={{ padding:"12px 0", borderTop:"1px solid rgba(255,255,255,0.08)" }}>
        <button onClick={()=>setScreen("signin")} style={{ width:"100%", display:"flex", alignItems:"center", gap:10, padding:"10px 16px", background:"transparent", border:"none", color:"#C49A6C", fontSize:14, cursor:"pointer", textAlign:"left", fontFamily:"inherit" }}>
          <span>→</span> Sign Out
        </button>
      </div>
    </div>
  );

  const TopBar = () => (
    <div style={{ background:"#FDF8ED", borderBottom:"1px solid #E8D9C0", padding:"0 28px", height:56, display:"flex", alignItems:"center", justifyContent:"flex-end", position:"relative" }}>
      <div onClick={e=>{ e.stopPropagation(); setUserMenuOpen(!userMenuOpen); }} style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer", padding:"6px 10px", borderRadius:8 }}>
        <span style={{ fontSize:18, color:"#8A6A4E" }}>👤</span>
        <span style={{ fontSize:14, fontWeight:600, color:"#2E1F12" }}>{JSON.parse(localStorage.getItem("user")||"{}").name||"Admin"}</span>
        <span style={{ fontSize:12, color:"#8A6A4E" }}>▾</span>
      </div>
      {userMenuOpen&&(
        <div onClick={e=>e.stopPropagation()} style={{ position:"absolute", top:50, right:20, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:12, boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:100, minWidth:220, padding:"8px 0" }}>
          <div style={{ padding:"10px 16px", borderBottom:"1px solid #f3f4f6" }}>
            <div style={{ fontSize:14, fontWeight:700, color:"#2E1F12" }}>{JSON.parse(localStorage.getItem("user")||"{}").name||"Admin"}</div>
            <div style={{ fontSize:12, color:"#8A6A4E" }}>{JSON.parse(localStorage.getItem("user")||"{}").email||""}</div>
          </div>
          <button onClick={e=>{ e.stopPropagation(); setActivePage("profile"); setUserMenuOpen(false); }} style={{ width:"100%", display:"flex", alignItems:"center", gap:10, padding:"10px 16px", background:"none", border:"none", fontSize:14, color:"#4A3624", cursor:"pointer", fontFamily:"inherit", textAlign:"left" }}><span>👤</span> Profile & Security</button>
          <button onClick={e=>{ e.stopPropagation(); setScreen("signin"); setUserMenuOpen(false); }} style={{ width:"100%", display:"flex", alignItems:"center", gap:10, padding:"10px 16px", background:"none", border:"none", fontSize:14, color:"#ef4444", cursor:"pointer", fontFamily:"inherit", textAlign:"left" }}><span>→</span> Sign Out</button>
        </div>
      )}
    </div>
  );

  const PageShell = ({ title, subtitle, children, headerRight }) => (
    <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }}
      onClick={()=>{ setUserMenuOpen(false); setStatusOpen(false); setFleetOpen(false); setVesselMenuOpen(null); }}>
      <TopBar/>
      <div style={{ padding:"28px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24 }}>
          <div>
            <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>{title}</h1>
            {subtitle&&<p style={{ fontSize:14, color:"#8A6A4E" }}>{subtitle}</p>}
          </div>
          {headerRight}
        </div>
        {children}
      </div>
    </div>
  );

  const EmptyState = ({ msg="No data found", icon="🔍" }) => (
    <div style={{ textAlign:"center", padding:"48px 0" }}>
      <div style={{ fontSize:32, color:"#DECBAB", marginBottom:12 }}>{icon}</div>
      <div style={{ fontSize:14, color:"#B59D7E" }}>{msg}</div>
    </div>
  );

  const SectionCard = ({ children }) => (
    <div style={{ background:"#FDF8ED", borderRadius:12, padding:"24px 28px", marginBottom:16, boxShadow:"0 1px 4px rgba(0,0,0,0.04)", maxWidth:700 }}>{children}</div>
  );

  const DropBtn = ({ value, open, setOpen, options, onSelect }) => (
    <div style={{ position:"relative" }} onClick={e=>e.stopPropagation()}>
      <button onClick={e=>{ e.stopPropagation(); setOpen(!open); }} style={{ display:"flex", alignItems:"center", gap:8, background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", fontSize:14, color:"#4A3624", cursor:"pointer", fontFamily:"inherit", minWidth:140 }}>
        <span style={{ flex:1, textAlign:"left" }}>{value}</span>
        <span style={{ color:"#8A6A4E", fontSize:11 }}>▾</span>
      </button>
      {open&&(
        <div style={{ position:"absolute", top:44, left:0, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:50, minWidth:160 }}>
          {options.map(opt=>(
            <div key={opt} onClick={()=>{ onSelect(opt); setOpen(false); }} style={{ padding:"10px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer", display:"flex", alignItems:"center", gap:8 }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
              {opt===value&&<span style={{ color:P }}>✓</span>}{opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderModal = () => {
    if (!modal) return null;
    if (modal==="changePw") return (
      <ModalOverlay title="Change password" subtitle="Enter your current password and choose a new one." onClose={()=>setModal(null)}>
        <div style={{ marginBottom:16 }}>
          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Current password</label>
          <div style={{ display:"flex", alignItems:"center", border:`2px solid ${P}`, borderRadius:8, padding:"10px 14px", gap:10 }}>
            <input value={currentPw} onChange={e=>setCurrentPw(e.target.value)} placeholder="Current password" type={showCurrPw?"text":"password"} style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
            <span onClick={()=>setShowCurrPw(!showCurrPw)} style={{ cursor:"pointer", color:"#B59D7E" }}>{showCurrPw?"🙈":"👁"}</span>
          </div>
        </div>
        <div style={{ marginBottom:16 }}>
          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>New password</label>
          <div style={{ display:"flex", alignItems:"center", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"10px 14px", gap:10 }}>
            <input value={newPassword} onChange={e=>setNewPassword(e.target.value)} placeholder="New password" type={showNewPassword?"text":"password"} style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
            <span onClick={()=>setShowNewPassword(!showNewPassword)} style={{ cursor:"pointer", color:"#B59D7E" }}>{showNewPassword?"🙈":"👁"}</span>
          </div>
        </div>
        <div style={{ marginBottom:24 }}>
          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Confirm new password</label>
          <div style={{ display:"flex", alignItems:"center", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"10px 14px", gap:10 }}>
            <input value={confirmPw} onChange={e=>setConfirmPw(e.target.value)} placeholder="Confirm new password" type={showConfirmPw?"text":"password"} style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
            <span onClick={()=>setShowConfirmPw(!showConfirmPw)} style={{ cursor:"pointer", color:"#B59D7E" }}>{showConfirmPw?"🙈":"👁"}</span>
          </div>
        </div>
        <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
          <button onClick={()=>setModal(null)} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
          <button onClick={()=>{
            if(!currentPw||!newPassword){alert("Please fill in all fields");return;}
            if(newPassword!==confirmPw){alert("New passwords do not match");return;}
            if(newPassword.length<6){alert("New password must be at least 6 characters");return;}
            fetch(`${API}/auth/change-password`,{method:"POST",headers:authHeader(),body:JSON.stringify({old_password:currentPw,new_password:newPassword})}).then(r=>r.json()).then(d=>{
              if(d.success){alert("Password changed successfully!");setModal(null);setCurrentPw("");setNewPassword("");setConfirmPw("");}
              else{alert(d.message||"Failed to change password");}
            }).catch(()=>alert("Error changing password"));
          }} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Update password</button>
        </div>
      </ModalOverlay>
    );
    if (modal==="setup2fa") return (
      <ModalOverlay title="Set up two-factor authentication" subtitle="Generate a QR code to scan with your authenticator app." onClose={()=>setModal(null)}>
        <button onClick={()=>{
          fetch(`${API}/auth/totp/setup`,{method:"POST",headers:authHeader()}).then(r=>r.json()).then(d=>{
            if(d.success){setTotpSecret(d.data.secret);setTotpUri(d.data.otpauth_uri);setModal("qrcode");}
            else{alert(d.message||"TOTP setup failed. Make sure pyotp is installed on the server.");}
          }).catch(()=>alert("Error setting up 2FA"));
        }} style={{ width:"100%", padding:"13px", background:P, color:"#fff", border:"none", borderRadius:8, fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>Generate QR code</button>
      </ModalOverlay>
    );
    if (modal==="qrcode") return (
      <ModalOverlay title="Set up two-factor authentication" subtitle="Scan the QR code, then enter the 6-digit code." onClose={()=>setModal(null)} maxWidth={520}>
        <div style={{ textAlign:"center", marginBottom:16 }}>
          <div style={{ width:200, height:200, margin:"0 auto 16px", background:"#FDF8ED", borderRadius:4, padding:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
            {totpUri
              ? <img src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(totpUri)}`} alt="QR code" style={{ width:180, height:180 }}/>
              : <span style={{ color:"#B59D7E", fontSize:13 }}>Generating…</span>}
          </div>
          <div style={{ fontSize:12, color:"#8A6A4E", marginBottom:4 }}>Or enter manually:</div>
          <div style={{ fontSize:12, fontFamily:"monospace", color:P, fontWeight:700, wordBreak:"break-all" }}>{totpSecret||"—"}</div>
        </div>
        <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
          <button onClick={()=>setModal("setup2fa")} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
          <button onClick={()=>setModal("verifyCode")} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>I've scanned the code</button>
        </div>
      </ModalOverlay>
    );
    if (modal==="verifyCode") return (
      <ModalOverlay title="Verify your code" subtitle="Enter the 6-digit code from your authenticator app." onClose={()=>setModal(null)}>
        <div style={{ marginBottom:24 }}>
          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Verification code</label>
          <input value={verifyInput} onChange={e=>setVerifyInput(e.target.value)} placeholder="000000" maxLength={6} style={{ width:"100%", padding:"12px 14px", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:16, fontFamily:"monospace", color:"#2E1F12", outline:"none", textAlign:"center", letterSpacing:"0.3em", boxSizing:"border-box" }}/>
        </div>
        <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
          <button onClick={()=>setModal("qrcode")} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Back</button>
          <button onClick={()=>{
            if(verifyInput.length!==6){alert("Enter the 6-digit code");return;}
            fetch(`${API}/auth/totp/verify`,{method:"POST",headers:authHeader(),body:JSON.stringify({code:verifyInput,secret:totpSecret})}).then(r=>r.json()).then(d=>{
              if(d.success){setTotpEnabled(true);setRealBackupCodes(d.backup_codes||[]);setModal("backupCodes");setVerifyInput("");}
              else{alert(d.message||"Invalid code");}
            }).catch(()=>alert("Error verifying code"));
          }} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Verify & enable</button>
        </div>
      </ModalOverlay>
    );
    if (modal==="backupCodes") return (
      <ModalOverlay title="Backup codes" subtitle="Save these codes in a safe place." onClose={()=>setModal(null)} maxWidth={520}>
        <div style={{ background:"#f0fdf4", border:"1px solid #dcfce7", borderRadius:10, padding:"16px 20px", marginBottom:16 }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
            {(realBackupCodes.length?realBackupCodes:BACKUP_CODES).map((code,i)=><div key={i} style={{ fontSize:14, fontFamily:"monospace", color:"#2E1F12" }}>{code}</div>)}
          </div>
        </div>
        <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
          <button onClick={()=>setModal(null)} style={{ padding:"10px 20px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>✓ I've saved my codes</button>
        </div>
      </ModalOverlay>
    );
    if (modal==="addPasskey") return (
      <ModalOverlay title="Add passkey or security key" subtitle="Give this key a name so you can identify it later." onClose={()=>setModal(null)}>
        <div style={{ marginBottom:24 }}>
          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Name</label>
          <input value={passkeyName} onChange={e=>setPasskeyName(e.target.value)} placeholder="e.g. YubiKey work" style={{ width:"100%", padding:"12px 14px", border:`2px solid ${P}`, borderRadius:8, fontSize:14, color:"#2E1F12", outline:"none", fontFamily:"inherit", boxSizing:"border-box" }}/>
        </div>
        <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
          <button onClick={()=>setModal(null)} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
          <button onClick={async()=>{
            if(!passkeyName.trim()){alert("Please name this key");return;}
            if(!window.PublicKeyCredential){alert("Passkeys not supported in this browser");return;}
            try{
              const challenge=new Uint8Array(32); window.crypto.getRandomValues(challenge);
              const userId=new Uint8Array(16); window.crypto.getRandomValues(userId);
              const cred=await navigator.credentials.create({publicKey:{
                challenge, rp:{name:"RightKnots"},
                user:{id:userId, name:"admin@inspectship.com", displayName:"Admin"},
                pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],
                authenticatorSelection:{userVerification:"preferred"}, timeout:60000, attestation:"none"
              }});
              if(cred){
                setPasskeys(prev=>[...prev,{id:cred.id,name:passkeyName}]);
                // save to backend
                fetch(`${API}/auth/passkeys/save`,{method:"POST",headers:authHeader(),body:JSON.stringify({credential:{id:cred.id},name:passkeyName})}).then(r=>r.json()).catch(()=>{});
                setPasskeyName(""); setModal(null); alert("Passkey registered!");
              }
            }catch(e){ alert("Passkey registration cancelled or failed: "+e.message); }
          }} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Add key</button>
        </div>
      </ModalOverlay>
    );
    return null;
  };

  const ComingSoon = ({ page }) => (
    <PageShell title={page}>
      <div style={{ background:"#FDF8ED", borderRadius:12, padding:"48px", textAlign:"center", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
        <div style={{ fontSize:40, marginBottom:16 }}>🚧</div>
        <div style={{ fontSize:18, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>{page}</div>
        <div style={{ fontSize:14, color:"#8A6A4E" }}>This section is ready to be configured.</div>
      </div>
    </PageShell>
  );

  return (
    <div style={{ fontFamily:selectedFont+",'Segoe UI',sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=${selectedFont.replace(/ /g,"+")}:wght@400;500;600;700;800&display=swap'); * { font-family: inherit; }`}</style>
      <Sidebar/>
      {renderModal()}

      {/* MODALS */}
      {showCreateAssignment&&(
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
          <div style={{ background:"#FDF8ED", borderRadius:16, padding:"28px 32px", width:"100%", maxWidth:560, boxShadow:"0 20px 60px rgba(0,0,0,0.3)", position:"relative", maxHeight:"90vh", overflowY:"auto" }}>
            <button onClick={()=>setShowCreateAssignment(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
            <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Create Assignment</h3>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Assign an inspection for {selectedVessel?.name}.</p>
            <div style={{ marginBottom:16 }}>
              <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Vessel</label>
              <input value={selectedVessel?.name||""} disabled style={{ ...inputStyle2, background:"#F7EFE0", color:"#8A6A4E" }}/>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
              <div>
                <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Template</label>
                <select value={assignmentForm.type} onChange={e=>setAssignmentForm({...assignmentForm,type:e.target.value})} style={selectStyle2}>
                  <option value="">Select template</option>
                  {templates.map(t=><option key={t.id} value={t.name}>{t.name}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Scheduled Date</label>
                <input type="date" value={assignmentForm.date} onChange={e=>setAssignmentForm({...assignmentForm,date:e.target.value})} style={inputStyle2}/>
              </div>
            </div>
            <div style={{ marginBottom:16 }}>
              <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Assign Inspector</label>
              <select value={assignmentForm.inspector} onChange={e=>setAssignmentForm({...assignmentForm,inspector:e.target.value})} style={selectStyle2}>
                <option value="">Select inspector</option>
                {inspectors.map(i=><option key={i.id} value={i.name}>{i.name}</option>)}
              </select>
            </div>
            <div style={{ marginBottom:24 }}>
              <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Notes</label>
              <textarea value={assignmentForm.notes} onChange={e=>setAssignmentForm({...assignmentForm,notes:e.target.value})} rows={3} style={{ ...inputStyle2, resize:"vertical", lineHeight:1.5 }}/>
            </div>
            <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
              <button onClick={()=>setShowCreateAssignment(false)} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
              <button onClick={async()=>{ if(!selectedVessel||!assignmentForm.inspector){alert("Please select an inspector");return;} try{ const inspObj=inspectors.find(i=>i.name===assignmentForm.inspector); const tmplObj=templates.find(t=>t.name===assignmentForm.type); const r=await fetch(`${API}/api/admin/assignments`,{method:"POST",headers:authHeader(),body:JSON.stringify({vessel_id:selectedVessel.id,template_id:tmplObj?.id,inspector_id:inspObj?.id,due_date:assignmentForm.date?assignmentForm.date+"T00:00:00":null,notes:assignmentForm.notes||null})}); const d=await r.json(); if(d.success){ const rl=await fetch(`${API}/api/admin/assignments`,{headers:authHeader()}); const dl=await rl.json(); if(dl.success)setAssignments(dl.data); setAssignmentForm({inspector:"",date:"",type:"",notes:""}); setShowCreateAssignment(false); alert("Assignment created!"); } else alert("Failed: "+(d.message||"Unknown error")); }catch(e){alert("Error: "+e.message);} }} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Create Assignment</button>
            </div>
          </div>
        </div>
      )}

      {showViewReports&&(
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
          <div style={{ background:"#FDF8ED", borderRadius:16, padding:"28px 32px", width:"100%", maxWidth:620, boxShadow:"0 20px 60px rgba(0,0,0,0.3)", position:"relative" }}>
            <button onClick={()=>setShowViewReports(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
            <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Reports — {selectedVessel?.name}</h3>
            <div style={{ textAlign:"center", padding:"40px 0" }}>
              <div style={{ fontSize:40, marginBottom:12 }}>📄</div>
              <div style={{ fontSize:15, fontWeight:600, color:"#4A3624", marginBottom:6 }}>No reports yet</div>
              <div style={{ fontSize:13, color:"#B59D7E" }}>Reports will appear here after inspections are completed.</div>
            </div>
          </div>
        </div>
      )}

      {showCorrectiveActions&&(
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
          <div style={{ background:"#FDF8ED", borderRadius:16, padding:"28px 32px", width:"100%", maxWidth:620, boxShadow:"0 20px 60px rgba(0,0,0,0.3)", position:"relative" }}>
            <button onClick={()=>setShowCorrectiveActions(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
            <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Corrective Actions — {selectedVessel?.name}</h3>
            <div style={{ textAlign:"center", padding:"40px 0" }}>
              <div style={{ fontSize:40, marginBottom:12 }}>✅</div>
              <div style={{ fontSize:15, fontWeight:600, color:"#4A3624", marginBottom:6 }}>No open corrective actions</div>
            </div>
          </div>
        </div>
      )}

      {showEditVessel&&editVesselData&&(
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
          <div style={{ background:"#FDF8ED", borderRadius:16, padding:"28px 32px", width:"100%", maxWidth:600, boxShadow:"0 20px 60px rgba(0,0,0,0.3)", position:"relative", maxHeight:"90vh", overflowY:"auto" }}>
            <button onClick={()=>setShowEditVessel(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
            <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:20 }}>Edit Vessel</h3>
            <div style={{ marginBottom:16 }}>
              <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Vessel Name</label>
              <input value={editVesselData.name} onChange={e=>setEditVesselData({...editVesselData,name:e.target.value})} style={inputStyle2}/>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
              <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>IMO Number</label><input value={editVesselData.imo} onChange={e=>setEditVesselData({...editVesselData,imo:e.target.value})} style={inputStyle2}/></div>
              <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Vessel Type</label>
                <select value={editVesselData.type} onChange={e=>setEditVesselData({...editVesselData,type:e.target.value})} style={selectStyle2}>{VESSEL_TYPES.map(t=><option key={t}>{t}</option>)}</select>
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
              <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Flag State</label><input value={editVesselData.flag} onChange={e=>setEditVesselData({...editVesselData,flag:e.target.value})} style={inputStyle2}/></div>
              <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Operator</label><input value={editVesselData.operator} onChange={e=>setEditVesselData({...editVesselData,operator:e.target.value})} style={inputStyle2}/></div>
            </div>
            <div style={{ display:"flex", gap:10, justifyContent:"flex-end", marginTop:16 }}>
              <button onClick={()=>setShowEditVessel(false)} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
              <button onClick={()=>{ fetch(`${API}/api/admin/vessels/${editVesselData.id}`,{method:"PATCH",headers:authHeader(),body:JSON.stringify({name:editVesselData.name,imo:editVesselData.imo,type:editVesselData.type,flag:editVesselData.flag,operator:editVesselData.operator,build_year:editVesselData.build_year})}).catch(()=>{}); setVessels(prev=>prev.map(v=>v.id===editVesselData.id?editVesselData:v)); if(selectedVessel?.id===editVesselData.id)setSelectedVessel(editVesselData); setShowEditVessel(false); }} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {showAddVessel&&(
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:300, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
          <div style={{ background:"#FDF8ED", borderRadius:16, padding:"28px 32px", width:"100%", maxWidth:600, boxShadow:"0 20px 60px rgba(0,0,0,0.3)", position:"relative", maxHeight:"90vh", overflowY:"auto" }}>
            <button onClick={()=>setShowAddVessel(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
            <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Add Vessel</h3>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Register a new vessel in your fleet registry.</p>
            <div style={{ marginBottom:16 }}>
              <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:4 }}>Vessel Name <span style={{ color:"#ef4444" }}>*</span></label>
              <input value={newVessel.name} onChange={e=>setNewVessel({...newVessel,name:e.target.value})} placeholder="e.g. MV Ocean Star" style={inputStyle}/>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
              <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>IMO Number</label><input value={newVessel.imo} onChange={e=>setNewVessel({...newVessel,imo:e.target.value})} placeholder="e.g. IMO9876543" style={inputStyle}/></div>
              <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Vessel Type</label><select value={newVessel.type} onChange={e=>setNewVessel({...newVessel,type:e.target.value})} style={selectStyle}>{VESSEL_TYPES.map(t=><option key={t}>{t}</option>)}</select></div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
              <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Flag State</label><input value={newVessel.flag} onChange={e=>setNewVessel({...newVessel,flag:e.target.value})} placeholder="e.g. Panama" style={inputStyle}/></div>
              <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Operator</label><input value={newVessel.operator} onChange={e=>setNewVessel({...newVessel,operator:e.target.value})} placeholder="e.g. OceanCo" style={inputStyle}/></div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:20 }}>
              <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Build Year</label><input value={newVessel.buildYear} onChange={e=>setNewVessel({...newVessel,buildYear:e.target.value})} placeholder="e.g. 2020" style={inputStyle}/></div>
              <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Fleet</label><select value={newVessel.fleet} onChange={e=>setNewVessel({...newVessel,fleet:e.target.value})} style={selectStyle}><option value="No fleet">No fleet</option>{fleets.map(f=><option key={f.id} value={f.name}>{f.name}</option>)}</select></div>
            </div>
            <div style={{ marginBottom:24 }}>
              <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Notes</label>
              <textarea value={newVessel.notes} onChange={e=>setNewVessel({...newVessel,notes:e.target.value})} rows={3} style={{ ...inputStyle, resize:"vertical" }}/>
            </div>
            <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
              <button onClick={()=>setShowAddVessel(false)} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
              <button onClick={addVessel} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Add Vessel</button>
            </div>
          </div>
        </div>
      )}

      {showAddFleet&&(
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:300, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
          <div style={{ background:"#FDF8ED", borderRadius:16, padding:"28px 32px", width:"100%", maxWidth:560, boxShadow:"0 20px 60px rgba(0,0,0,0.3)", position:"relative" }}>
            <button onClick={()=>{ setShowAddFleet(false); setNewFleetName(""); setNewFleetRegion(""); }} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
            <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:20 }}>Add Fleet</h3>
            <div style={{ marginBottom:20 }}>
              <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Fleet Name <span style={{ color:"#ef4444" }}>*</span></label>
              <input value={newFleetName} onChange={e=>setNewFleetName(e.target.value)} placeholder="e.g. North Atlantic Fleet" style={{ ...inputStyle, border:`2px solid ${newFleetName?P:"#E8D9C0"}` }}/>
            </div>
            <div style={{ marginBottom:28 }}>
              <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Region</label>
              <input value={newFleetRegion} onChange={e=>setNewFleetRegion(e.target.value)} placeholder="e.g. Atlantic, Pacific" style={inputStyle}/>
            </div>
            <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
              <button onClick={()=>{ setShowAddFleet(false); setNewFleetName(""); setNewFleetRegion(""); }} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
              <button onClick={async()=>{ if(!newFleetName)return; try{ const r=await fetch(`${API}/api/admin/fleets`,{method:"POST",headers:authHeader(),body:JSON.stringify({name:newFleetName,description:newFleetRegion||""})}); const d=await r.json(); if(d.success){setFleets(prev=>[...prev,{id:d.data.id,name:d.data.name,description:d.data.description,region:d.data.description,vessels:[]}]); setNewFleetName(""); setNewFleetRegion(""); setShowAddFleet(false);} }catch(e){alert("Error");} }} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Add Fleet</button>
            </div>
          </div>
        </div>
      )}

      {/* DASHBOARD */}
      {activePage==="dashboard"&&(
        <PageShell title="Dashboard" subtitle="Fleet inspection overview">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16, marginBottom:24 }}>
            {[["🚢",dashboardStats.total_vessels||0,"Vessels"],["📋",dashboardStats.total_assignments||0,"Assignments",A],["✅",dashboardStats.total_templates||0,"Templates","#22c55e"],["👥",dashboardStats.total_inspectors||0,"Inspectors","#3b82f6"]].map(([icon,val,label,color])=>(
              <div key={label} style={{ background:"#FDF8ED", borderRadius:12, padding:"20px 24px", display:"flex", alignItems:"center", gap:16, boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                <span style={{ fontSize:26, color:color||P }}>{icon}</span>
                <div><div style={{ fontSize:28, fontWeight:800, color:"#2E1F12" }}>{val}</div><div style={{ fontSize:13, color:"#8A6A4E", marginTop:2 }}>{label}</div></div>
              </div>
            ))}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:24 }}>
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"20px 24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontSize:16, fontWeight:700, color:"#2E1F12", marginBottom:16 }}>Operations Overview</h3>
              <div style={{ display:"flex", flexDirection:"column", gap:12, fontSize:14 }}>
                {[["Active Sessions",dashboardStats.active_sessions||0,"#3b82f6"],["Pending Reviews",dashboardStats.pending_reviews||0,"#f59e0b"],["Open CAPAs",dashboardStats.open_capas||0,"#ef4444"],["Total Fleets",dashboardStats.total_fleets||0,"#22c55e"],["Total Questions",dashboardStats.total_questions||0,"#8b5cf6"]].map(([l,v,c])=>(
                  <div key={l} style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}><span style={{ fontWeight:600, color:"#8A6A4E" }}>{l}</span><span style={{ fontWeight:800, color:c, fontSize:18 }}>{v}</span></div>
                ))}
              </div>
            </div>
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"20px 24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontSize:16, fontWeight:700, color:"#2E1F12", marginBottom:16 }}>Quick Actions</h3>
              {[["➕","Create Template","templates"],["📋","Assign Inspection","assignments"],["👁","Review Queue","reviewqueue"]].map(([icon,label,page])=>(
                <button key={label} onClick={()=>setActivePage(page)} style={{ width:"100%", display:"flex", alignItems:"center", gap:10, padding:"12px 14px", background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:8, marginBottom:8, cursor:"pointer", fontSize:14, fontWeight:500, color:"#2E1F12", fontFamily:"inherit", textAlign:"left" }}>
                  <span>{icon}</span> {label}
                </button>
              ))}
            </div>
          </div>
          <div style={{ background:"#FDF8ED", borderRadius:12, padding:"20px 24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
            <h3 style={{ fontSize:16, fontWeight:700, color:"#2E1F12", marginBottom:16 }}>Real-time Session Status</h3>
            <EmptyState msg="No sessions in progress"/>
          </div>
        </PageShell>
      )}

      {/* VESSEL DETAIL */}
      {activePage==="vessels"&&selectedVessel&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>setUserMenuOpen(false)}>
          <TopBar/>
          <div style={{ padding:"20px 28px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <span onClick={()=>setSelectedVessel(null)} style={{ cursor:"pointer", fontSize:18, color:"#4A3624" }}>←</span>
                <div>
                  <h1 style={{ fontSize:24, fontWeight:800, color:"#2E1F12", marginBottom:2 }}>{selectedVessel.name}</h1>
                  <div style={{ fontSize:14, color:"#8A6A4E" }}>{selectedVessel.imo||"—"} · {selectedVessel.type!=="—"?selectedVessel.type:"—"}</div>
                </div>
              </div>
              <div style={{ display:"flex", gap:10 }}>
                <button onClick={()=>setShowCreateAssignment(true)} style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 16px", background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:8, fontSize:13, fontWeight:500, cursor:"pointer", fontFamily:"inherit", color:"#4A3624" }}>📋 Create Assignment</button>
                <button onClick={()=>setShowViewReports(true)} style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 16px", background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:8, fontSize:13, fontWeight:500, cursor:"pointer", fontFamily:"inherit", color:"#4A3624" }}>📄 View Reports</button>
                <button onClick={()=>setShowCorrectiveActions(true)} style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 16px", background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:8, fontSize:13, fontWeight:500, cursor:"pointer", fontFamily:"inherit", color:"#4A3624" }}>⚠️ Corrective Actions</button>
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
              <div style={{ background:"#FDF8ED", borderRadius:12, padding:"20px 24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontSize:16, fontWeight:700, color:"#2E1F12", marginBottom:16 }}>Vessel Profile</h3>
                {[["Operator",selectedVessel.operator||"—"],["Build Year",selectedVessel.build_year||selectedVessel.buildYear||"—"],["Flag",selectedVessel.flag||"—"],["Type",selectedVessel.type||"—"]].map(([k,v])=>(
                  <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #f3f4f6", fontSize:14 }}>
                    <span style={{ color:"#8A6A4E" }}>{k}</span><span style={{ color:"#2E1F12", fontWeight:500 }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ background:"#FDF8ED", borderRadius:12, padding:"20px 24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontSize:16, fontWeight:700, color:"#2E1F12", marginBottom:16 }}>Operational Summary</h3>
                {[["Last inspection","—"],["Next scheduled","—"],["Open corrective actions","0"]].map(([k,v])=>(
                  <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #f3f4f6", fontSize:14 }}>
                    <span style={{ color:"#8A6A4E" }}>{k}</span><span style={{ color:"#2E1F12", fontWeight:500 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"20px 24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontSize:16, fontWeight:700, color:"#2E1F12", marginBottom:16 }}>Inspection History</h3>
              <EmptyState msg="No inspection history yet."/>
            </div>
          </div>
        </div>
      )}

      {/* VESSELS LIST */}
      {activePage==="vessels"&&!selectedVessel&&(
        <PageShell title="Vessels" subtitle="Manage your fleet registry">
          <div style={{ display:"flex", gap:10, marginBottom:16, alignItems:"center" }}>
            <div style={{ flex:1, display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:10 }}>
              <span style={{ color:"#B59D7E" }}>🔍</span>
              <input value={vesselSearch} onChange={e=>setVesselSearch(e.target.value)} placeholder="Search name, IMO..." style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
            </div>
            <DropBtn value={statusFilter} open={statusOpen} setOpen={setStatusOpen} options={["All statuses","Active","Inactive","Archived"]} onSelect={setStatusFilter}/>
            <DropBtn value={fleetFilter} open={fleetOpen} setOpen={setFleetOpen} options={["All fleets",...fleets.map(f=>f.name)]} onSelect={setFleetFilter}/>
          </div>
          <div style={{ marginBottom:16 }}>
            <button onClick={e=>{ e.stopPropagation(); setShowAddVessel(true); }} style={{ display:"flex", alignItems:"center", gap:8, background:P, color:"#fff", border:"none", borderRadius:24, padding:"10px 22px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>+ Add Vessel</button>
          </div>
          <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"visible" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
              <thead>
                <tr style={{ borderBottom:"1px solid #f3f4f6" }}>
                  {["VESSEL NAME","IMO","TYPE","FLEET","OPERATOR","STATUS",""].map(h=>(
                    <th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:600, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredVessels.length===0?<tr><td colSpan={7}><EmptyState msg="No data found"/></td></tr>:filteredVessels.map(v=>(
                  <tr key={v.id} style={{ borderBottom:"1px solid #f9fafb", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                    <td style={{ padding:"14px 16px", fontWeight:600, color:"#2E1F12" }} onClick={()=>setSelectedVessel(v)}>{v.name}</td>
                    <td style={{ padding:"14px 16px", color:"#4A3624" }} onClick={()=>setSelectedVessel(v)}>{v.imo||"—"}</td>
                    <td style={{ padding:"14px 16px", color:"#4A3624" }} onClick={()=>setSelectedVessel(v)}>{v.type!=="—"?v.type:"—"}</td>
                    <td style={{ padding:"14px 16px", color:"#4A3624" }} onClick={()=>setSelectedVessel(v)}>{v.fleet!=="No fleet"?v.fleet:"—"}</td>
                    <td style={{ padding:"14px 16px", color:"#4A3624" }} onClick={()=>setSelectedVessel(v)}>{v.operator||"—"}</td>
                    <td style={{ padding:"14px 16px" }} onClick={()=>setSelectedVessel(v)}><span style={{ background:P, color:"#fff", borderRadius:20, padding:"4px 14px", fontSize:12, fontWeight:600 }}>active</span></td>
                    <td style={{ padding:"14px 16px", position:"relative", textAlign:"right" }} onClick={e=>e.stopPropagation()}>
                      <button onClick={e=>{ e.stopPropagation(); setVesselMenuOpen(vesselMenuOpen===v.id?null:v.id); }} style={{ background:"none", border:"none", cursor:"pointer", color:"#8A6A4E", padding:"4px 8px", fontSize:16, fontWeight:700, letterSpacing:"2px" }}>•••</button>
                      {vesselMenuOpen===v.id&&(
                        <div style={{ position:"absolute", right:8, top:44, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:100, minWidth:140, overflow:"hidden" }}>
                          <div onClick={()=>{ setSelectedVessel(v); setVesselMenuOpen(null); }} style={{ padding:"11px 18px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>View</div>
                          <div onClick={()=>{ setEditVesselData({...v}); setShowEditVessel(true); setVesselMenuOpen(null); }} style={{ padding:"11px 18px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Edit</div>
                          <div onClick={()=>{ fetch(`${API}/api/admin/vessels/${v.id}`,{method:"DELETE",headers:authHeader()}).catch(()=>{}); setVessels(prev=>prev.filter(x=>x.id!==v.id)); setVesselMenuOpen(null); }} style={{ padding:"11px 18px", fontSize:14, color:"#ef4444", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#fef2f2"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Delete</div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PageShell>
      )}

      {/* FLEETS */}
      {activePage==="fleets"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>{ setUserMenuOpen(false); setFleetMenuOpen(null); }}>
          <TopBar/>
          <div style={{ padding:"28px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
              <div><h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Fleets</h1><p style={{ fontSize:14, color:"#8A6A4E" }}>Organize vessels into fleets</p></div>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:16 }}>
              <div style={{ flex:1, display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:10 }}>
                <span style={{ color:"#B59D7E" }}>🔍</span>
                <input value={fleetSearch} onChange={e=>setFleetSearch(e.target.value)} placeholder="Search..." style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
              </div>
              <button onClick={e=>{ e.stopPropagation(); setShowAddFleet(true); }} style={{ background:P, color:"#fff", border:"none", borderRadius:24, padding:"10px 22px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>+ Add Fleet</button>
            </div>
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"visible" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["FLEET NAME","VESSELS","REGION","STATUS",""].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:600, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
                <tbody>
                  {fleets.filter(f=>f.name.toLowerCase().includes(fleetSearch.toLowerCase())).length===0
                    ?<tr><td colSpan={5}><EmptyState msg="No fleets yet. Click Add Fleet to create one." icon="⚓"/></td></tr>
                    :fleets.filter(f=>f.name.toLowerCase().includes(fleetSearch.toLowerCase())).map(f=>(
                      <tr key={f.id} style={{ borderBottom:"1px solid #f9fafb", cursor:"pointer" }} onClick={()=>{ setSelectedFleet(f); setFleetMenuOpen(null); }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                        <td style={{ padding:"14px 16px", fontWeight:600, color:"#2E1F12" }}>{f.name}</td>
                        <td style={{ padding:"14px 16px" }}><span style={{ background:"#F3E7D3", borderRadius:20, padding:"3px 12px", fontSize:13, fontWeight:500 }}>{(f.vessels||[]).length}</span></td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{f.region||"—"}</td>
                        <td style={{ padding:"14px 16px" }}><span style={{ background:P, color:"#fff", borderRadius:20, padding:"4px 14px", fontSize:12, fontWeight:600 }}>active</span></td>
                        <td style={{ padding:"14px 16px", position:"relative", textAlign:"right", width:56 }} onClick={e=>e.stopPropagation()}>
                          <button onClick={e=>{ e.stopPropagation(); setFleetMenuOpen(fleetMenuOpen===f.id?null:f.id); }} style={{ background:"none", border:"1px solid #E8D9C0", borderRadius:8, cursor:"pointer", color:"#8A6A4E", fontSize:15, fontWeight:700, letterSpacing:"2px", padding:"4px 10px" }}>•••</button>
                          {fleetMenuOpen===f.id&&(
                            <div style={{ position:"absolute", right:8, top:44, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 32px rgba(0,0,0,0.18)", zIndex:1000, minWidth:140, overflow:"hidden" }} onClick={e=>e.stopPropagation()}>
                              <div onClick={()=>{ setEditFleetData({...f}); setShowEditFleet(true); setFleetMenuOpen(null); }} style={{ padding:"11px 18px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Edit</div>
                              <div style={{ height:1, background:"#fee2e2", margin:"2px 0" }}/>
                              <div onClick={()=>{ fetch(`${API}/api/admin/fleets/${f.id}`,{method:"DELETE",headers:authHeader()}).catch(()=>{}); setFleets(prev=>prev.filter(x=>x.id!==f.id)); if(selectedFleet?.id===f.id)setSelectedFleet(null); setFleetMenuOpen(null); }} style={{ padding:"11px 18px", fontSize:14, color:"#ef4444", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#fef2f2"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Delete</div>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
          {selectedFleet&&(
            <div onClick={e=>e.stopPropagation()} style={{ position:"fixed", top:0, right:0, width:420, height:"100vh", background:"#FDF8ED", borderLeft:"1px solid #E8D9C0", boxShadow:"-4px 0 24px rgba(0,0,0,0.08)", zIndex:50, overflowY:"auto", padding:"24px 28px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
                <h3 style={{ fontSize:20, fontWeight:800, color:"#2E1F12" }}>{selectedFleet.name}</h3>
                <button onClick={()=>setSelectedFleet(null)} style={{ background:"none", border:"none", cursor:"pointer", color:"#8A6A4E", fontSize:20 }}>✕</button>
              </div>
              <div style={{ fontSize:13, color:"#8A6A4E" }}>Region: {selectedFleet.region||"—"}</div>
            </div>
          )}

          {/* EDIT FLEET MODAL */}
          {showEditFleet&&editFleetData&&(
            <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <div style={{ background:"#FDF8ED", borderRadius:16, padding:"28px 32px", width:"100%", maxWidth:520, boxShadow:"0 20px 60px rgba(0,0,0,0.3)", position:"relative" }} onClick={e=>e.stopPropagation()}>
                <button onClick={()=>{ setShowEditFleet(false); setEditFleetData(null); }} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
                <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Edit Fleet</h3>
                <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Update fleet details.</p>
                <div style={{ marginBottom:20 }}>
                  <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Fleet Name <span style={{ color:"#ef4444" }}>*</span></label>
                  <input value={editFleetData.name} onChange={e=>setEditFleetData({...editFleetData,name:e.target.value})}
                    style={{ width:"100%", padding:"11px 14px", border:`2px solid ${P}`, borderRadius:8, fontSize:14, color:"#2E1F12", fontFamily:"inherit", outline:"none", boxSizing:"border-box" }}/>
                </div>
                <div style={{ marginBottom:28 }}>
                  <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Region</label>
                  <input value={editFleetData.region||""} onChange={e=>setEditFleetData({...editFleetData,region:e.target.value})}
                    placeholder="e.g. Atlantic, Pacific"
                    style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, color:"#2E1F12", fontFamily:"inherit", outline:"none", boxSizing:"border-box" }}/>
                </div>
                <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
                  <button onClick={()=>{ setShowEditFleet(false); setEditFleetData(null); }} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
                  <button onClick={()=>{
                    if(!editFleetData.name)return;
                    fetch(`${API}/api/admin/fleets/${editFleetData.id}`,{method:"PATCH",headers:authHeader(),body:JSON.stringify({name:editFleetData.name,description:editFleetData.region||""})}).catch(()=>{});
                    setFleets(prev=>prev.map(x=>x.id===editFleetData.id?{...x,name:editFleetData.name,region:editFleetData.region}:x));
                    if(selectedFleet?.id===editFleetData.id) setSelectedFleet(prev=>({...prev,name:editFleetData.name,region:editFleetData.region}));
                    setShowEditFleet(false); setEditFleetData(null);
                  }} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Save Changes</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* PROFILE */}
      {activePage==="profile"&&(
        <PageShell title="Profile" subtitle="Your account and security settings">
          <SectionCard>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16 }}><span>👤</span><span style={{ fontSize:15, fontWeight:700, color:"#2E1F12" }}>Admin Profile</span></div>
            <div style={{ display:"flex", alignItems:"center", gap:16 }}>
              <div style={{ width:56, height:56, background:"#E8D9C0", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26 }}>👤</div>
              <div>
                <div style={{ fontSize:16, fontWeight:700, color:"#2E1F12" }}>Admin</div>
                <div style={{ fontSize:13, color:"#8A6A4E" }}>admin@seasecureshipping.com</div>
              </div>
            </div>
          </SectionCard>
          <SectionCard>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16 }}><span>🔑</span><span style={{ fontSize:15, fontWeight:700, color:"#2E1F12" }}>Password</span></div>
            <button onClick={()=>setModal("changePw")} style={{ background:"#FDF8ED", color:"#2E1F12", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"8px 18px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Change password</button>
          </SectionCard>
          <SectionCard>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16 }}><span>🛡</span><span style={{ fontSize:15, fontWeight:700, color:"#2E1F12" }}>Authenticator app (TOTP)</span></div>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <span style={{ background:totpEnabled?"#dcfce7":"#F3E7D3", color:totpEnabled?"#166534":"#4A3624", borderRadius:20, padding:"3px 12px", fontSize:12, fontWeight:700 }}>{totpEnabled?"Enabled":"Disabled"}</span>
              {!totpEnabled
                ?<button onClick={()=>setModal("setup2fa")} style={{ background:"#FDF8ED", color:"#2E1F12", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"8px 18px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Enable</button>
                :<button onClick={()=>{ if(!confirm("Disable two-factor authentication?"))return; fetch(`${API}/auth/totp/disable`,{method:"POST",headers:authHeader()}).then(r=>r.json()).then(d=>{ if(d.success){setTotpEnabled(false);alert("2FA disabled");} }).catch(()=>{}); }} style={{ background:"#FDF8ED", color:"#ef4444", border:"1.5px solid #fecaca", borderRadius:8, padding:"8px 18px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Disable</button>}
            </div>
          </SectionCard>
          <SectionCard>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16 }}><span>🔲</span><span style={{ fontSize:15, fontWeight:700, color:"#2E1F12" }}>Security keys</span></div>
            {passkeys.length===0
              ?<p style={{ fontSize:13, color:"#8A6A4E", marginBottom:16 }}>No security keys registered.</p>
              :<div style={{ marginBottom:16 }}>{passkeys.map((k,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px 0", borderBottom:"1px solid #f3f4f6" }}>
                  <span style={{ fontSize:14, color:"#2E1F12" }}>🔑 {k.name}</span>
                  <button onClick={()=>setPasskeys(prev=>prev.filter((_,idx)=>idx!==i))} style={{ background:"none", border:"none", color:"#ef4444", fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>Remove</button>
                </div>
              ))}</div>}
            <button onClick={()=>setModal("addPasskey")} style={{ background:"#FDF8ED", color:"#2E1F12", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"8px 18px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Add passkey or security key</button>
          </SectionCard>
        </PageShell>
      )}

      {/* QUESTION BANK — AI PARAMETERS FULL PAGE */}
      {activePage==="questionbank"&&aiParamsQuestion&&(()=>{
        const q=aiParamsQuestion;
        const Toggle2=({on,onToggle})=>(<div onClick={onToggle} style={{width:48,height:26,borderRadius:13,background:on?P:"#DECBAB",cursor:"pointer",position:"relative",flexShrink:0,transition:"background 0.2s"}}><div style={{position:"absolute",top:3,left:on?25:3,width:20,height:20,borderRadius:"50%",background:"#FDF8ED",transition:"left 0.2s",boxShadow:"0 1px 4px rgba(0,0,0,0.2)"}}/></div>);
        const qIdx=questions.indexOf(q)+1;
        return (
          <div style={{marginLeft:240,minHeight:"100vh",background:"#F2EBDD",fontFamily:selectedFont+",'Segoe UI',sans-serif"}} onClick={()=>setUserMenuOpen(false)}>
            <TopBar/>
            {/* Header row - has side padding */}
            <div style={{padding:"24px 28px 0"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <span onClick={()=>setAiParamsQuestion(null)} style={{cursor:"pointer",color:"#4A3624",fontSize:20,lineHeight:1}}>←</span>
                  <div><h1 style={{fontSize:24,fontWeight:800,color:"#2E1F12",marginBottom:2}}>AI Parameters</h1><div style={{fontSize:14,color:"#8A6A4E"}}>Question: {qIdx}</div></div>
                </div>
                <button onClick={()=>{setQuestions(prev=>prev.map(x=>x.id===q.id?{...x,aiParams:{evidenceType:aiP.evidenceType,ocrRequired:aiP.ocrRequired,objectPresenceList:aiP.objectPresenceList,conditionClassification:aiP.conditionClassification,acceptableRanges:aiP.acceptableRanges,autoAcceptAbove:aiP.autoAcceptAbove,flagBelowReview:aiP.flagBelowReview,routingRules:aiP.routingRules,suggestedCAs:aiP.suggestedCAs}}:x));setAiParamsQuestion(null);}}
                  style={{display:"flex",alignItems:"center",gap:8,padding:"10px 24px",background:P,color:"#fff",border:"none",borderRadius:8,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                  Save
                </button>
              </div>
            </div>
            {/* Content - full width cards with small padding */}
            <div style={{padding:"0 28px 28px"}}>

              {/* How to use */}
              <div style={{background:"#FDF8ED",borderRadius:12,marginBottom:16,boxShadow:"0 1px 4px rgba(0,0,0,0.06)",overflow:"hidden"}}>
                <button onClick={()=>setAiHowToOpen(!aiHowToOpen)} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 22px",background:"none",border:"none",cursor:"pointer",fontFamily:"inherit"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,fontSize:15,fontWeight:500,color:"#4A3624"}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                    How to use
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{aiHowToOpen?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
                </button>
                {aiHowToOpen&&(
                  <div style={{padding:"4px 28px 28px",borderTop:"1px solid #f3f4f6"}}>
                    <div style={{marginTop:20,marginBottom:16}}><p style={{fontSize:14,fontWeight:700,color:"#2E1F12",marginBottom:8}}>What this page is for</p><p style={{fontSize:14,color:"#4A3624",lineHeight:1.7}}>Configure per-question AI behaviour: what to detect, confidence thresholds, and when/how to route for review. These settings override or supplement the template-level AI profile for this specific question.</p></div>
                    <div style={{marginBottom:16}}>
                      <p style={{fontSize:14,fontWeight:700,color:"#2E1F12",marginBottom:8}}>Key fields explained</p>
                      <ul style={{margin:0,paddingLeft:20}}>
                        {[["Required Evidence Type","Photo, video, or both for this question."],["OCR Required","Extract text from documents in evidence."],["Object Presence List","Comma-separated objects the AI should look for (e.g. fire_extinguisher, safety_sign)."],["Condition Classification","What the AI classifies (e.g. corrosion_level)."],["Acceptable Ranges/Thresholds","Valid ranges (e.g. 0–5mm)."],["Confidence Thresholds","Auto-accept above X; flag for review below Y."],["Reviewer Routing Rules","Map conditions (e.g. low confidence, high severity) to who should review. Examples: low_confidence → senior_reviewer; high_severity → admin."]].map(([k,v],i)=>(
                          <li key={i} style={{fontSize:14,color:"#4A3624",marginBottom:6,lineHeight:1.6}}><strong style={{color:P}}>{k}</strong> — {v}</li>
                        ))}
                      </ul>
                    </div>
                    <div style={{marginBottom:16}}>
                      <p style={{fontSize:14,fontWeight:700,color:"#2E1F12",marginBottom:8}}>Reviewer Routing Rules</p>
                      <p style={{fontSize:14,color:"#4A3624",lineHeight:1.6,marginBottom:8}}>Map conditions to reviewer roles. When the AI detects a condition (e.g. low confidence, high severity), the evidence is routed to the specified reviewer. Common conditions:</p>
                      <div style={{fontSize:13,fontFamily:"monospace",background:"#F7EFE0",padding:"8px 12px",borderRadius:6,marginBottom:8,lineHeight:1.8}}>low_confidence , high_severity , disagreement , missing_evidence . Common reviewers: senior_reviewer , admin , operations .</div>
                    </div>
                    <div style={{marginBottom:16}}>
                      <p style={{fontSize:14,fontWeight:700,color:"#2E1F12",marginBottom:8}}>Typical workflow</p>
                      <ol style={{margin:0,paddingLeft:20}}>{["Set evidence type and checks (OCR, object presence, condition, ranges).","Set confidence thresholds (auto-accept above / flag below).","Add routing rules for edge cases (e.g. low_confidence → senior_reviewer).","Save."].map((t,i)=><li key={i} style={{fontSize:14,color:"#4A3624",marginBottom:5,lineHeight:1.6}}>{t}</li>)}</ol>
                    </div>
                    <div style={{marginBottom:16}}>
                      <p style={{fontSize:14,fontWeight:700,color:"#2E1F12",marginBottom:8}}>Examples</p>
                      <ul style={{margin:0,paddingLeft:20}}>
                        <li style={{fontSize:14,color:"#4A3624",marginBottom:5,lineHeight:1.6}}>Fire extinguisher: object presence (extinguisher, pressure gauge) + acceptable range; route low_confidence to senior_reviewer.</li>
                        <li style={{fontSize:14,color:"#4A3624",marginBottom:5,lineHeight:1.6}}>Corrosion: condition classification (corrosion_level) + acceptable ranges (0–5mm); route high_severity to admin.</li>
                      </ul>
                    </div>
                    <div style={{marginBottom:8}}><p style={{fontSize:14,fontWeight:700,color:"#2E1F12",marginBottom:8}}>Best practice</p><ul style={{margin:0,paddingLeft:20}}><li style={{fontSize:14,color:"#4A3624",marginBottom:5}}>Start with thresholds; add routing rules for critical questions.</li><li style={{fontSize:14,color:"#4A3624",marginBottom:5}}>Use routing rules when certain conditions need specialist review.</li></ul></div>
                    <div style={{display:"flex",alignItems:"center",gap:6,color:"#8A6A4E",fontSize:13,cursor:"pointer",marginTop:8}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Need help?</div>
                  </div>
                )}
              </div>

              {/* Required Evidence Type - flat section */}
              <div style={{background:"#FDF8ED",padding:"24px 28px",marginBottom:1}}>
                <label style={{fontSize:15,fontWeight:600,color:"#2E1F12",display:"block",marginBottom:12}}>Required Evidence Type</label>
                <select value={aiP.evidenceType} onChange={e=>setAiP({...aiP,evidenceType:e.target.value})} style={{width:"100%",padding:"12px 16px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#4A3624",fontFamily:"inherit",outline:"none",appearance:"none",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")",backgroundRepeat:"no-repeat",backgroundPosition:"right 16px center",cursor:"pointer"}}>
                  <option>Photo</option><option>Video</option><option>Both</option>
                </select>
              </div>

              {/* Checks Configuration - bordered card */}
              <div style={{margin:"16px 0",border:"1px solid #E8D9C0",borderRadius:12,background:"#FDF8ED",overflow:"hidden"}}>
                <div style={{padding:"20px 28px",borderBottom:"1px solid #f3f4f6"}}>
                  <p style={{fontSize:15,fontWeight:700,color:"#2E1F12",margin:0}}>Checks Configuration</p>
                </div>
                <div style={{padding:"20px 28px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:16,marginBottom:16,borderBottom:"1px solid #f3f4f6"}}>
                    <span style={{fontSize:14,color:"#4A3624",fontWeight:500}}>OCR Required</span>
                    <Toggle2 on={aiP.ocrRequired} onToggle={()=>setAiP({...aiP,ocrRequired:!aiP.ocrRequired})}/>
                  </div>
                  <div style={{marginBottom:16}}><label style={{fontSize:14,fontWeight:500,color:"#4A3624",display:"block",marginBottom:8}}>Object Presence List</label><textarea value={aiP.objectPresenceList} onChange={e=>setAiP({...aiP,objectPresenceList:e.target.value})} placeholder="fire_extinguisher, safety_sign, ..." rows={4} style={{width:"100%",padding:"12px 16px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#4A3624",fontFamily:"inherit",outline:"none",resize:"vertical",lineHeight:1.5,boxSizing:"border-box"}}/></div>
                  <div style={{marginBottom:16}}><label style={{fontSize:14,fontWeight:500,color:"#4A3624",display:"block",marginBottom:8}}>Condition Classification</label><input value={aiP.conditionClassification} onChange={e=>setAiP({...aiP,conditionClassification:e.target.value})} placeholder="e.g. corrosion_level" style={{width:"100%",padding:"12px 16px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#4A3624",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}}/></div>
                  <div><label style={{fontSize:14,fontWeight:500,color:"#4A3624",display:"block",marginBottom:8}}>Acceptable Ranges/Thresholds</label><input value={aiP.acceptableRanges} onChange={e=>setAiP({...aiP,acceptableRanges:e.target.value})} placeholder="e.g. 0-5mm" style={{width:"100%",padding:"12px 16px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#4A3624",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}}/></div>
                </div>
              </div>

              {/* Confidence Thresholds - flat section */}
              <div style={{background:"#FDF8ED",padding:"24px 28px",marginBottom:1}}>
                <p style={{fontSize:15,fontWeight:700,color:"#2E1F12",marginBottom:20}}>Confidence Thresholds</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
                  <div><label style={{fontSize:14,fontWeight:500,color:"#4A3624",display:"block",marginBottom:8}}>Auto-Accept Above</label><input value={aiP.autoAcceptAbove} onChange={e=>setAiP({...aiP,autoAcceptAbove:e.target.value})} placeholder="0.95" style={{width:"100%",padding:"12px 16px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#4A3624",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}}/></div>
                  <div><label style={{fontSize:14,fontWeight:500,color:"#4A3624",display:"block",marginBottom:8}}>Flag for Review Below</label><input value={aiP.flagBelowReview} onChange={e=>setAiP({...aiP,flagBelowReview:e.target.value})} placeholder="0.70" style={{width:"100%",padding:"12px 16px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#4A3624",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}}/></div>
                </div>
              </div>

              {/* Reviewer Routing Rules - flat section */}
              <div style={{background:"#FDF8ED",padding:"24px 28px",marginBottom:16}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                  <p style={{fontSize:15,fontWeight:700,color:"#2E1F12",margin:0}}>Reviewer Routing Rules</p>
                  <button onClick={()=>{if(!aiP.newRuleCondition||!aiP.newRuleReviewer)return;setAiP(prev=>({...prev,routingRules:[...prev.routingRules,{id:Date.now(),condition:prev.newRuleCondition,reviewer:prev.newRuleReviewer}],newRuleCondition:"",newRuleReviewer:""}));}} style={{display:"flex",alignItems:"center",gap:6,background:"none",border:"1px solid #E8D9C0",borderRadius:8,padding:"7px 14px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",color:"#4A3624"}}>+ Add rule</button>
                </div>
                <p style={{fontSize:13,color:"#B59D7E",marginBottom:16}}>When condition X occurs, route to reviewer Y.</p>
                {aiP.routingRules.length===0
                  ?<div style={{fontSize:13,color:"#B59D7E",textAlign:"center",padding:"20px 0",background:"#F7EFE0",borderRadius:8}}>No rules. Click "Add rule" to map conditions to reviewers.</div>
                  :aiP.routingRules.map(r=>(<div key={r.id} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:"#F7EFE0",borderRadius:8,marginBottom:8}}><span style={{fontSize:13,color:"#4A3624",flex:1}}><strong>{r.condition}</strong> → {r.reviewer}</span><button onClick={()=>setAiP(prev=>({...prev,routingRules:prev.routingRules.filter(x=>x.id!==r.id)}))} style={{background:"none",border:"none",cursor:"pointer",color:"#B59D7E",fontSize:16}}>✕</button></div>))
                }
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr auto",gap:10,marginTop:12}}>
                  <input value={aiP.newRuleCondition} onChange={e=>setAiP({...aiP,newRuleCondition:e.target.value})} placeholder="Condition (e.g. low_confidence)" style={{padding:"10px 14px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:13,fontFamily:"inherit",outline:"none"}}/>
                  <input value={aiP.newRuleReviewer} onChange={e=>setAiP({...aiP,newRuleReviewer:e.target.value})} placeholder="Reviewer (e.g. admin)" style={{padding:"10px 14px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:13,fontFamily:"inherit",outline:"none"}}/>
                  <button onClick={()=>{if(!aiP.newRuleCondition||!aiP.newRuleReviewer)return;setAiP(prev=>({...prev,routingRules:[...prev.routingRules,{id:Date.now(),condition:prev.newRuleCondition,reviewer:prev.newRuleReviewer}],newRuleCondition:"",newRuleReviewer:""}));}} style={{padding:"10px 18px",background:P,color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Add</button>
                </div>
              </div>

              {/* Suggested Corrective Actions - card */}
              <div style={{border:"1px solid #E8D9C0",borderRadius:12,background:"#FDF8ED",overflow:"hidden",marginBottom:28}}>
                <div style={{padding:"20px 28px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                    <p style={{fontSize:15,fontWeight:700,color:"#2E1F12",margin:0}}>Suggested corrective actions</p>
                  </div>
                  <p style={{fontSize:13,color:"#B59D7E",marginBottom:16}}>When this question fails, these library items will be suggested in the review flow. Order matters.</p>
                  <div style={{display:"flex",gap:10,marginBottom:12,alignItems:"center"}}>
                    <select value={aiP.selectedCA} onChange={e=>setAiP({...aiP,selectedCA:e.target.value})} style={{flex:1,padding:"10px 36px 10px 14px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:aiP.selectedCA?"#4A3624":"#B59D7E",fontFamily:"inherit",outline:"none",appearance:"none",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")",backgroundRepeat:"no-repeat",backgroundPosition:"right 14px center",cursor:"pointer"}}>
                      <option value="">Add from library...</option>
                      {caTemplates.map(t=><option key={t.id} value={t.id}>{t.title}</option>)}
                    </select>
                    <button onClick={()=>{if(!aiP.selectedCA)return;const ca=caTemplates.find(t=>String(t.id)===String(aiP.selectedCA));if(!ca||aiP.suggestedCAs.find(x=>x.id===ca.id))return;setAiP(prev=>({...prev,suggestedCAs:[...prev.suggestedCAs,ca],selectedCA:""}));}} style={{padding:"10px 20px",background:"#FDF8ED",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit",color:"#4A3624",whiteSpace:"nowrap"}}>Save order</button>
                  </div>
                  {aiP.suggestedCAs.length===0
                    ?<div style={{fontSize:13,color:"#B59D7E",textAlign:"center",padding:"20px 0"}}>No suggested corrective actions. Add items from the library above.</div>
                    :aiP.suggestedCAs.map((ca,i)=>(<div key={ca.id} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:"#F7EFE0",borderRadius:8,marginBottom:8}}><span style={{fontSize:12,color:"#B59D7E",fontWeight:600,width:20}}>{i+1}.</span><span style={{fontSize:14,color:"#4A3624",flex:1}}>{ca.title}</span><button onClick={()=>setAiP(prev=>({...prev,suggestedCAs:prev.suggestedCAs.filter(x=>x.id!==ca.id)}))} style={{background:"none",border:"none",cursor:"pointer",color:"#B59D7E",fontSize:16}}>✕</button></div>))
                  }
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* QUESTION BANK — LIST + MODALS */}
      {activePage==="questionbank"&&!aiParamsQuestion&&(()=>{
        const sevColor={low:"#8A6A4E",medium:"#4A3624",high:A,critical:"#ef4444"};
        const sevBg={low:"#F3E7D3",medium:"#F3E7D3",high:"#fff3e0",critical:"#fee2e2"};
        const filtered=questions.filter(q=>{
          const qText=(q.text||q.question||"").toString();
          const matchCat=qbCategoryFilter==="All categories"||q.category===qbCategoryFilter;
          const matchSev=qbSeverityFilter==="All severities"||(q.severity||"").toLowerCase()===qbSeverityFilter.toLowerCase();
          const matchType=qbTypeFilter==="All types"||q.type===qbTypeFilter;
          const matchSearch=!qbSearch||qText.toLowerCase().includes(qbSearch.toLowerCase());
          return matchCat&&matchSev&&matchType&&matchSearch;
        });
        const totalPages=Math.ceil(filtered.length/qbPerPage);
        const paginated=filtered.slice((qbPage-1)*qbPerPage,qbPage*qbPerPage);
        return (
          <div style={{marginLeft:240,minHeight:"100vh",background:"#F2EBDD",fontFamily:selectedFont+",'Segoe UI',sans-serif"}}
            onClick={()=>{setQbCatOpen(false);setQbSevOpen(false);setQbTypeOpen(false);setQbPerPageOpen(false);setUserMenuOpen(false);setQbMenuOpen(null);}}>
            <TopBar/>
            <div style={{padding:"28px"}}>
              {/* Header with Export/Import/Upload */}
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:24}}>
                <div>
                  <h1 style={{fontSize:26,fontWeight:800,color:"#2E1F12",marginBottom:4}}>Question Bank</h1>
                  <p style={{fontSize:14,color:"#8A6A4E",margin:0}}>Manage inspection questions</p>
                </div>
                <div style={{display:"flex",gap:10}}>
                  {/* Export CSV */}
                  <button onClick={()=>{const headers=["question_text","category","sub_area","severity","type","evidence_required","inspection_guide"];const rows=questions.map(q=>[q.text,q.category,q.subArea||"",q.severity,q.type,q.evidenceRequired?"true":"false",q.inspectionGuide||""].map(v=>`"${String(v).replace(/"/g,'""')}"`).join(","));const csv=[headers.join(","),...rows].join("\n");const blob=new Blob([csv],{type:"text/csv"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="question_bank.csv";a.click();URL.revokeObjectURL(url);}}
                    style={{display:"flex",alignItems:"center",gap:7,padding:"9px 18px",background:"#FDF8ED",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",color:"#4A3624"}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Export CSV
                  </button>
                  {/* Download Template */}
                  <button onClick={()=>{const headers=["question_text","category","sub_area","severity","type","evidence_required","inspection_guide"];const sample=[`"Are all fire extinguishers within service date?","Deck","Safety Equipment","high","binary","true","Check pressure gauge and service tag date"`,`"Is the engine room log up to date?","Engine Room","Logs","medium","binary","false","Review last 7 days of entries"`];const csv=[headers.join(","),...sample].join("\n");const blob=new Blob([csv],{type:"text/csv"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="question_bank_template.csv";a.click();URL.revokeObjectURL(url);}}
                    style={{display:"flex",alignItems:"center",gap:7,padding:"9px 18px",background:"#FDF8ED",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",color:"#4A3624"}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
                    Template
                  </button>
                  {/* Upload File button */}
                  <label style={{display:"flex",alignItems:"center",gap:7,padding:"9px 18px",background:P,border:"none",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",color:"#fff"}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                    Upload File
                    <input type="file" accept=".csv,.xlsx,.xls" style={{display:"none"}} onChange={e=>{
                      const file=e.target.files[0]; if(!file)return;
                      window._bulkFile = file;
                      const VALID_CATS=["deck","engine room","bridge","general information","navigation","safety","accommodation","cargo","hull","machinery","documentation","environmental","fire safety","life saving","pollution prevention"];
                      const VALID_SEVS=["low","medium","high","critical"];
                      const VALID_TYPES=["binary","written","measurement","binary (yes/no)","written response","text","multiple choice","numeric","yes/no"];
                      const processRows=(rawRows)=>{
                        const preview=[]; const errors=[];
                        rawRows.forEach((row,i)=>{
                          const text=(row["question_text"]||row["Question"]||row["question"]||"").trim();
                          const cat=(row["category"]||row["Category"]||"").trim();
                          const sev=(row["severity"]||row["Severity"]||"medium").trim().toLowerCase();
                          const type=(row["type"]||row["Type"]||"binary").trim().toLowerCase();
                          const subArea=(row["sub_area"]||row["Sub-Area"]||row["subarea"]||"").trim();
                          const evidReq=(row["evidence_required"]||row["Evidence Required"]||"false").toString().toLowerCase()==="true";
                          const guide=(row["inspection_guide"]||row["Inspection Guide"]||row["guide_to_inspection"]||row["Guide"]||"").trim();
                          const subNumber=(row["sub_number"]||row["Sub Number"]||row["sub_no"]||row["Sub No"]||"").trim();
                          const rowErrors=[];
                          if(!text) rowErrors.push("Question text is empty");
                          if(!VALID_CATS.includes(cat.toLowerCase())) rowErrors.push(`Invalid category "${cat}"`);
                          if(!VALID_SEVS.includes(sev)) rowErrors.push(`Invalid severity "${sev}"`);
                          if(!VALID_TYPES.includes(type)) rowErrors.push(`Invalid type "${type}"`);
                          if(rowErrors.length>0){ errors.push({row:i+2,errors:rowErrors,text:text||"(empty)"}); }
                          else { preview.push({text,subNumber,category:cat.charAt(0).toUpperCase()+cat.slice(1),subArea,severity:sev,type:type==="binary (yes/no)"?"binary":type==="written response"?"written":type,evidenceRequired:evidReq,inspectionGuide:guide}); }
                        });
                        setBulkPreviewRows(preview);
                        setBulkErrors(errors);
                        setShowBulkPreview(true);
                      };
                      if(file.name.endsWith(".csv")){
                        const reader=new FileReader();
                        reader.onload=ev=>{
                          const lines=ev.target.result.split("\n").filter(l=>l.trim());
                          const headers=lines[0].split(",").map(h=>h.replace(/^"|"$/g,"").trim());
                          const rows=lines.slice(1).map(line=>{
                            const cols=line.split(",").map(c=>c.replace(/^"|"$/g,"").trim());
                            const obj={}; headers.forEach((h,i)=>obj[h]=cols[i]||""); return obj;
                          });
                          processRows(rows);
                        };
                        reader.readAsText(file);
                      } else {
                        const reader=new FileReader();
                        reader.onload=ev=>{
                          try{
                            const data=new Uint8Array(ev.target.result);
                            let text=""; data.forEach(b=>text+=String.fromCharCode(b));
                            // Basic XLSX fallback - treat as CSV if possible
                            alert("Excel files: please save as CSV first, then upload.");
                          }catch(err){ alert("Could not read file. Please use CSV format."); }
                        };
                        reader.readAsArrayBuffer(file);
                      }
                      e.target.value="";
                    }}/>
                  </label>
                </div>
              </div>

              {/* BULK UPLOAD PREVIEW MODAL */}
              {showBulkPreview&&(
                <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
                  <div style={{background:"#FDF8ED",borderRadius:16,width:"100%",maxWidth:700,maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 24px 64px rgba(0,0,0,0.3)"}} onClick={e=>e.stopPropagation()}>
                    {/* Header */}
                    <div style={{padding:"24px 28px 18px",borderBottom:"1px solid #f3f4f6"}}>
                      <h3 style={{fontSize:19,fontWeight:800,color:"#2E1F12",marginBottom:4}}>Upload Preview</h3>
                      <p style={{fontSize:14,color:"#8A6A4E",margin:0}}>Review before importing. Valid rows will be added to the Question Bank.</p>
                    </div>
                    {/* Summary pills */}
                    <div style={{padding:"16px 28px",borderBottom:"1px solid #f3f4f6",display:"flex",gap:12}}>
                      <div style={{display:"flex",alignItems:"center",gap:8,background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,padding:"8px 16px"}}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        <span style={{fontSize:13,fontWeight:700,color:"#16a34a"}}>{bulkPreviewRows.length} valid rows</span>
                      </div>
                      {bulkErrors.length>0&&(
                        <div style={{display:"flex",alignItems:"center",gap:8,background:"#fef2f2",border:"1px solid #fecaca",borderRadius:8,padding:"8px 16px"}}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                          <span style={{fontSize:13,fontWeight:700,color:"#dc2626"}}>{bulkErrors.length} rows with errors</span>
                        </div>
                      )}
                      {questions.length>0&&bulkPreviewRows.filter(r=>questions.some(q=>(q.text||"").toLowerCase()===(r.text||"").toLowerCase())).length>0&&(
                        <div style={{display:"flex",alignItems:"center",gap:8,background:"#fffbeb",border:"1px solid #fde68a",borderRadius:8,padding:"8px 16px"}}>
                          <span style={{fontSize:13,fontWeight:700,color:"#d97706"}}>⚠️ {bulkPreviewRows.filter(r=>questions.some(q=>(q.text||"").toLowerCase()===(r.text||"").toLowerCase())).length} duplicates will be skipped</span>
                        </div>
                      )}
                    </div>
                    {/* Content */}
                    <div style={{flex:1,overflowY:"auto",padding:"0 28px 8px"}}>
                      {/* Valid rows preview */}
                      {bulkPreviewRows.length>0&&(
                        <div style={{marginTop:16,marginBottom:16}}>
                          <p style={{fontSize:13,fontWeight:700,color:"#4A3624",marginBottom:10}}>Valid Questions (first 5 preview)</p>
                          <div style={{border:"1px solid #E8D9C0",borderRadius:10,overflow:"hidden"}}>
                            <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
                              <thead><tr style={{background:"#F7EFE0",borderBottom:"1px solid #E8D9C0"}}>{["SUB NO","QUESTION","CATEGORY","SEVERITY","TYPE"].map(h=><th key={h} style={{textAlign:"left",padding:"10px 14px",color:"#8A6A4E",fontWeight:700,fontSize:11,letterSpacing:"0.05em"}}>{h}</th>)}</tr></thead>
                              <tbody>
                                {bulkPreviewRows.slice(0,5).map((r,i)=>(
                                  <tr key={i} style={{borderBottom:"1px solid #f3f4f6"}}>
                                    <td style={{padding:"10px 14px",color:"#4A3624",fontWeight:500}}>{r.subNumber||"—"}</td>
                                    <td style={{padding:"10px 14px",color:"#2E1F12",maxWidth:280,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.text}</td>
                                    <td style={{padding:"10px 14px",color:"#4A3624"}}>{r.category}</td>
                                    <td style={{padding:"10px 14px"}}><span style={{background:r.severity==="critical"?"#fee2e2":r.severity==="high"?"#fff3e0":"#F3E7D3",color:r.severity==="critical"?"#ef4444":r.severity==="high"?A:"#4A3624",borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:600}}>{r.severity}</span></td>
                                    <td style={{padding:"10px 14px",color:"#4A3624"}}>{r.type}</td>
                                  </tr>
                                ))}
                                {bulkPreviewRows.length>5&&<tr><td colSpan={4} style={{padding:"10px 14px",color:"#B59D7E",fontSize:12,textAlign:"center"}}>...and {bulkPreviewRows.length-5} more rows</td></tr>}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                      {/* Error rows */}
                      {bulkErrors.length>0&&(
                        <div style={{marginBottom:16}}>
                          <p style={{fontSize:13,fontWeight:700,color:"#dc2626",marginBottom:10}}>❌ Rows with errors (will be skipped)</p>
                          <div style={{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:10,padding:"12px 16px"}}>
                            {bulkErrors.map((e,i)=>(
                              <div key={i} style={{fontSize:13,color:"#4A3624",marginBottom:6,display:"flex",gap:8,alignItems:"flex-start"}}>
                                <span style={{color:"#dc2626",fontWeight:700,flexShrink:0}}>Row {e.row}:</span>
                                <span>{e.text!=="(empty)"&&<strong>"{e.text.slice(0,40)}{e.text.length>40?"...":""}" — </strong>}{e.errors.join(", ")}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Footer */}
                    <div style={{padding:"16px 28px",borderTop:"1px solid #f3f4f6",display:"flex",gap:10,justifyContent:"space-between",alignItems:"center"}}>
                      <button onClick={()=>setShowBulkPreview(false)} style={{padding:"10px 22px",background:"#FDF8ED",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit",color:"#2E1F12"}}>Cancel</button>
                      <div style={{display:"flex",gap:10}}>
                        {bulkPreviewRows.length>0&&(
                          <button onClick={async()=>{
                            const token = localStorage.getItem('token');
                            const bulkFile = window._bulkFile || (document.getElementById('bulk-file-input')?.files?.[0]);
                            if(bulkFile && token){
                              try{
                                const formData = new FormData();
                                formData.append('file', bulkFile);
                                const r = await fetch(`${API}/api/admin/questions/bulk-upload`,{method:'POST',headers:{'Authorization':`Bearer ${token}`},body:formData});
                                const d = await r.json();
                                console.log('bulk upload response:', d);
                                if(d && d.success){
                                  const importedCount = parseInt((d.message||"").match(/\d+/)?.[0] || bulkPreviewRows.length);
                                  // Reload questions from backend
                                  try{
                                    const rq = await fetch(`${API}/api/admin/questions`,{headers:{"Authorization":`Bearer ${token}`}});
                                    const dq = await rq.json();
                                    if(dq && dq.success && Array.isArray(dq.data)){
                                      setQuestions(dq.data.map(q=>({...q,text:q.question||"",subNumber:q.sub_number||"",subArea:q.sub_area||"",inspectionGuide:q.guide_to_inspection||"",evidenceRequired:q.evidence_required})));
                                    }
                                  }catch(reloadErr){ console.log('reload failed:', reloadErr); }
                                  setQbPage(1);
                                  setShowBulkPreview(false);
                                  setBulkResult({inserted:importedCount,skipped:0,errors:[]});
                                  setShowBulkResult(true);
                                  return;
                                } else {
                                  console.log('upload returned non-success:', d);
                                }
                              }catch(e){ console.log('Backend upload failed, using local:', e); }
                            } else {
                              console.log('No file or token:', {hasFile:!!bulkFile, hasToken:!!token});
                            }
                            // Fallback to local
                            const dupes=new Set(questions.map(q=>(q.text||"").toLowerCase()));
                            const toInsert=bulkPreviewRows.filter(r=>!dupes.has((r.text||"").toLowerCase()));
                            const skipped=bulkPreviewRows.length-toInsert.length;
                            const newQs=toInsert.map(r=>({...r,id:Date.now()+Math.random(),evidence:r.evidenceRequired?"photo":"—",status:"Active"}));
                            setQuestions(prev=>[...prev,...newQs]);
                            setQbPage(1);
                            setShowBulkPreview(false);
                            setBulkResult({inserted:newQs.length,skipped,errors:bulkErrors});
                            setShowBulkResult(true);
                          }} style={{padding:"10px 24px",background:P,border:"none",borderRadius:8,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",color:"#fff"}}>
                            Import {bulkPreviewRows.length} Questions
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* BULK UPLOAD RESULT MODAL */}
              {showBulkResult&&(
                <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
                  <div style={{background:"#FDF8ED",borderRadius:16,width:"100%",maxWidth:480,boxShadow:"0 24px 64px rgba(0,0,0,0.3)",overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
                    <div style={{background:"#f0fdf4",padding:"28px",textAlign:"center",borderBottom:"1px solid #bbf7d0"}}>
                      <div style={{width:56,height:56,background:"#22c55e",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px"}}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <h3 style={{fontSize:20,fontWeight:800,color:"#2E1F12",marginBottom:6}}>Upload Complete!</h3>
                      <p style={{fontSize:14,color:"#8A6A4E",margin:0}}>Your questions have been added to the Question Bank.</p>
                    </div>
                    <div style={{padding:"24px 28px"}}>
                      {[
                        {label:"Questions imported",value:bulkResult.inserted,color:"#16a34a",bg:"#f0fdf4",border:"#bbf7d0"},
                        {label:"Duplicates skipped",value:bulkResult.skipped,color:"#d97706",bg:"#fffbeb",border:"#fde68a"},
                        {label:"Rows with errors",value:bulkResult.errors.length,color:"#dc2626",bg:"#fef2f2",border:"#fecaca"},
                      ].map(({label,value,color,bg,border})=>(
                        <div key={label} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 16px",background:bg,border:`1px solid ${border}`,borderRadius:10,marginBottom:10}}>
                          <span style={{fontSize:14,color:"#4A3624",fontWeight:500}}>{label}</span>
                          <span style={{fontSize:20,fontWeight:800,color}}>{value}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{padding:"0 28px 24px",display:"flex",gap:10,justifyContent:"flex-end"}}>
                      <button onClick={()=>setShowBulkResult(false)} style={{padding:"10px 28px",background:P,border:"none",borderRadius:8,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",color:"#fff"}}>Done</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Filters */}
              <div style={{marginBottom:16}}>
                <div style={{fontSize:11,fontWeight:700,color:"#B59D7E",letterSpacing:"0.08em",marginBottom:10}}>FILTERS</div>
                <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                  {/* Category */}
                  <div style={{position:"relative"}} onClick={e=>e.stopPropagation()}>
                    <button onClick={e=>{e.stopPropagation();setQbCatOpen(!qbCatOpen);setQbSevOpen(false);setQbTypeOpen(false);}} style={{display:"flex",alignItems:"center",gap:8,background:"#FDF8ED",border:"1.5px solid #E8D9C0",borderRadius:8,padding:"9px 14px",fontSize:14,color:"#4A3624",cursor:"pointer",fontFamily:"inherit",minWidth:150}}>
                      <span style={{flex:1,textAlign:"left"}}>{qbCategoryFilter}</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    {qbCatOpen&&<div style={{position:"absolute",top:44,left:0,background:"#FDF8ED",border:"1px solid #E8D9C0",borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,0.12)",zIndex:200,minWidth:160,overflow:"hidden"}}>
                      {["All categories","Deck","Engine Room","Bridge"].map(opt=><div key={opt} onClick={()=>{setQbCategoryFilter(opt);setQbCatOpen(false);setQbPage(1);}} style={{padding:"10px 16px",fontSize:14,color:"#2E1F12",cursor:"pointer",display:"flex",alignItems:"center",gap:10,background:opt===qbCategoryFilter?"#F7EFE0":"#fff"}} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background=opt===qbCategoryFilter?"#F7EFE0":"#fff"}>{opt===qbCategoryFilter&&<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>}{opt!==qbCategoryFilter&&<span style={{width:14}}/>}{opt}</div>)}
                    </div>}
                  </div>
                  {/* Severity */}
                  <div style={{position:"relative"}} onClick={e=>e.stopPropagation()}>
                    <button onClick={e=>{e.stopPropagation();setQbSevOpen(!qbSevOpen);setQbCatOpen(false);setQbTypeOpen(false);}} style={{display:"flex",alignItems:"center",gap:8,background:"#FDF8ED",border:"1.5px solid #E8D9C0",borderRadius:8,padding:"9px 14px",fontSize:14,color:"#4A3624",cursor:"pointer",fontFamily:"inherit",minWidth:140}}>
                      <span style={{flex:1,textAlign:"left"}}>{qbSeverityFilter}</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    {qbSevOpen&&<div style={{position:"absolute",top:44,left:0,background:"#FDF8ED",border:"1px solid #E8D9C0",borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,0.12)",zIndex:200,minWidth:150,overflow:"hidden"}}>
                      {["All severities","Low","Medium","High","Critical"].map(opt=><div key={opt} onClick={()=>{setQbSeverityFilter(opt);setQbSevOpen(false);setQbPage(1);}} style={{padding:"10px 16px",fontSize:14,color:"#2E1F12",cursor:"pointer",display:"flex",alignItems:"center",gap:10,background:opt===qbSeverityFilter?"#F7EFE0":"#fff"}} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background=opt===qbSeverityFilter?"#F7EFE0":"#fff"}>{opt}</div>)}
                    </div>}
                  </div>
                  {/* Type */}
                  <div style={{position:"relative"}} onClick={e=>e.stopPropagation()}>
                    <button onClick={e=>{e.stopPropagation();setQbTypeOpen(!qbTypeOpen);setQbCatOpen(false);setQbSevOpen(false);}} style={{display:"flex",alignItems:"center",gap:8,background:"#FDF8ED",border:"1.5px solid #E8D9C0",borderRadius:8,padding:"9px 14px",fontSize:14,color:"#4A3624",cursor:"pointer",fontFamily:"inherit",minWidth:120}}>
                      <span style={{flex:1,textAlign:"left"}}>{qbTypeFilter}</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    {qbTypeOpen&&<div style={{position:"absolute",top:44,left:0,background:"#FDF8ED",border:"1px solid #E8D9C0",borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,0.12)",zIndex:200,minWidth:180,overflow:"hidden"}}>
                      {["All types","Binary (Yes/No)","Written Response","Measurement"].map(opt=><div key={opt} onClick={()=>{setQbTypeFilter(opt);setQbTypeOpen(false);setQbPage(1);}} style={{padding:"10px 16px",fontSize:14,color:"#2E1F12",cursor:"pointer",display:"flex",alignItems:"center",gap:10,background:opt===qbTypeFilter?"#F7EFE0":"#fff"}} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background=opt===qbTypeFilter?"#F7EFE0":"#fff"}>{opt}</div>)}
                    </div>}
                  </div>
                </div>
              </div>

              {/* Search + Add */}
              <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:16}}>
                <div style={{flex:1,display:"flex",alignItems:"center",background:"#FDF8ED",border:"1.5px solid #E8D9C0",borderRadius:8,padding:"9px 14px",gap:10,maxWidth:500}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  <input value={qbSearch} onChange={e=>{setQbSearch(e.target.value);setQbPage(1);}} placeholder="Search..." style={{border:"none",outline:"none",flex:1,fontSize:14,color:"#2E1F12",fontFamily:"inherit"}}/>
                </div>
                <button onClick={e=>{e.stopPropagation();setShowAddQuestion(true);}} style={{display:"flex",alignItems:"center",gap:8,background:P,color:"#fff",border:"none",borderRadius:8,padding:"10px 22px",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>
                  + Add Question
                </button>
              </div>

              {/* Show per page — only when questions > 0 */}
              {questions.length>0&&(
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16,fontSize:14,color:"#4A3624"}}>
                  <span>Show</span>
                  <div style={{position:"relative"}} onClick={e=>e.stopPropagation()}>
                    <button onClick={e=>{e.stopPropagation();setQbPerPageOpen(!qbPerPageOpen);}} style={{display:"flex",alignItems:"center",gap:6,background:"#FDF8ED",border:"1.5px solid #E8D9C0",borderRadius:8,padding:"6px 14px",fontSize:14,color:"#4A3624",cursor:"pointer",fontFamily:"inherit",minWidth:70}}>
                      <span style={{flex:1}}>{Math.min(qbPerPage, questions.length)}</span>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    {qbPerPageOpen&&(
                      <div style={{position:"absolute",top:40,left:0,background:"#FDF8ED",border:"1px solid #E8D9C0",borderRadius:8,boxShadow:"0 8px 24px rgba(0,0,0,0.15)",zIndex:9999,minWidth:80,overflow:"hidden"}}>
                        {[10,25,50,100].map(n=>(
                          <div key={n} onClick={()=>{setQbPerPage(n);setQbPerPageOpen(false);setQbPage(1);}}
                            style={{padding:"10px 20px",fontSize:14,color:"#2E1F12",cursor:"pointer",background:n===qbPerPage?"#F9E3CD":"#fff",fontWeight:n===qbPerPage?600:400}}
                            onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"}
                            onMouseOut={e=>e.currentTarget.style.background=n===qbPerPage?"#F9E3CD":"#fff"}>
                            {n}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <span>per page</span>
                </div>
              )}

              {/* Bulk delete bar */}
              {qbSelected.size>0&&(
                <div style={{display:"flex",alignItems:"center",gap:14,background:"#fef2f2",border:"1px solid #fecaca",borderRadius:10,padding:"10px 16px",marginBottom:12}}>
                  <span style={{fontSize:14,fontWeight:600,color:"#991b1b"}}>{qbSelected.size} selected</span>
                  <button disabled={qbDeleting}
                    onClick={async()=>{
                      if(!window.confirm(`Delete ${qbSelected.size} question(s)? This cannot be undone.`)) return;
                      setQbDeleting(true);
                      try{
                        const r=await fetch(`${API}/api/admin/questions/bulk-delete`,{method:"POST",headers:authHeader(),body:JSON.stringify({ids:[...qbSelected]})});
                        if(!r.ok) throw new Error("bulk endpoint missing");
                      }catch{
                        // fallback: delete one by one if backend endpoint unavailable
                        for(const id of qbSelected){ await fetch(`${API}/api/admin/questions/${id}`,{method:"DELETE",headers:authHeader()}).catch(()=>{}); }
                      }
                      setQuestions(prev=>prev.filter(x=>!qbSelected.has(x.id)));
                      setQbSelected(new Set());
                      setQbPage(1);
                      setQbDeleting(false);
                    }}
                    style={{padding:"8px 18px",background:"#ef4444",color:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:qbDeleting?"wait":"pointer",fontFamily:"inherit",opacity:qbDeleting?0.6:1}}>
                    {qbDeleting?"Deleting…":"Delete Selected"}
                  </button>
                  <button onClick={()=>setQbSelected(new Set())} style={{padding:"8px 14px",background:"#FDF8ED",color:"#4A3624",border:"1px solid #E8D9C0",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Clear</button>
                </div>
              )}
              {/* Table */}
              <div style={{background:"#FDF8ED",borderRadius:12,boxShadow:"0 1px 4px rgba(0,0,0,0.06)",overflow:"visible"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
                  <thead>
                    <tr style={{borderBottom:"2px solid #f3f4f6"}}>
                      <th style={{width:"4%",padding:"12px 14px",textAlign:"left"}}>
                        <input type="checkbox" checked={filtered.length>0&&qbSelected.size===filtered.length}
                          onChange={e=>{ if(e.target.checked){ setQbSelected(new Set(filtered.map(q=>q.id))); } else { setQbSelected(new Set()); } }}
                          style={{width:16,height:16,cursor:"pointer",accentColor:P}} />
                      </th>
                      {[["SI NO","4%"],["SUB NO","6%"],["QUESTION","24%"],["CATEGORY","10%"],["SUB-AREA","9%"],["SEVERITY","8%"],["TYPE","8%"],["EVIDENCE","6%"],["GUIDE","10%"],["","4%"]].map(([h,w])=>(
                        <th key={h} style={{textAlign:"left",padding:"12px 14px",color:"#8A6A4E",fontWeight:700,fontSize:11,letterSpacing:"0.05em",width:w}}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {paginated.length===0?<tr><td colSpan={11}><div style={{textAlign:"center",padding:"56px 0"}}>
                      <div style={{fontSize:36,marginBottom:12}}>❓</div>
                      <div style={{fontSize:15,fontWeight:600,color:"#4A3624",marginBottom:6}}>No questions yet</div>
                      <div style={{fontSize:13,color:"#B59D7E",marginBottom:20}}>Click "Add Question" to build your question bank.</div>
                      <button onClick={()=>setShowAddQuestion(true)} style={{padding:"10px 24px",background:P,color:"#fff",border:"none",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Add Question</button>
                    </div></td></tr>:paginated.map((q,idx)=>(
                      <tr key={q.id} style={{borderBottom:"1px solid #f3f4f6",cursor:"pointer"}} onClick={()=>{ setAiParamsQuestion(q); setAiP({ evidenceType:q.aiParams?.evidenceType||"Photo", ocrRequired:q.aiParams?.ocrRequired||false, objectPresenceList:q.aiParams?.objectPresenceList||"", conditionClassification:q.aiParams?.conditionClassification||"", acceptableRanges:q.aiParams?.acceptableRanges||"", autoAcceptAbove:q.aiParams?.autoAcceptAbove||"0.95", flagBelowReview:q.aiParams?.flagBelowReview||"0.70", routingRules:q.aiParams?.routingRules||[], suggestedCAs:q.aiParams?.suggestedCAs||[], newRuleCondition:"", newRuleReviewer:"", selectedCA:"" }); setAiHowToOpen(true); }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                        {/* SELECT */}
                        <td style={{padding:"13px 14px"}} onClick={e=>e.stopPropagation()}>
                          <input type="checkbox" checked={qbSelected.has(q.id)}
                            onChange={()=>{ setQbSelected(prev=>{ const n=new Set(prev); if(n.has(q.id)) n.delete(q.id); else n.add(q.id); return n; }); }}
                            style={{width:16,height:16,cursor:"pointer",accentColor:P}} />
                        </td>
                        {/* SI NO - auto */}
                        <td style={{padding:"13px 14px",color:"#B59D7E",fontWeight:600,fontSize:13}}>{(qbPage-1)*qbPerPage+idx+1}</td>
                        {/* SUB NUMBER - manual */}
                        <td style={{padding:"13px 14px",color:"#4A3624",fontSize:13,fontWeight:500}}>{q.subNumber||"—"}</td>
                        <td style={{padding:"13px 14px",color:"#2E1F12",lineHeight:1.5,fontWeight:500}}>{q.text}</td>
                        <td style={{padding:"13px 14px",color:"#4A3624"}}>{q.category}</td>
                        <td style={{padding:"13px 14px",color:"#4A3624"}}>{q.subArea||"—"}</td>
                        <td style={{padding:"13px 14px"}}><span style={{background:sevBg[q.severity]||"#F3E7D3",color:sevColor[q.severity]||"#4A3624",borderRadius:20,padding:"3px 10px",fontSize:12,fontWeight:500}}>{q.severity}</span></td>
                        <td style={{padding:"13px 14px",color:"#4A3624",fontSize:13}}>{q.type}</td>
                        <td style={{padding:"13px 14px",color:"#4A3624",fontSize:13}}>{q.evidence||"—"}</td>
                        {/* GUIDE */}
                        <td style={{padding:"13px 14px",fontSize:13}} onClick={e=>e.stopPropagation()}>
                          {q.inspectionGuide
                            ?<div style={{display:"flex",alignItems:"center",gap:6}}>
                              <span title={q.inspectionGuide} style={{color:"#4A3624",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:110,display:"inline-block"}}>{q.inspectionGuide}</span>
                              <button onClick={()=>alert(`Guide to Inspection\n\n${q.inspectionGuide}`)} title="View full guide"
                                style={{background:"none",border:"1px solid #E8D9C0",borderRadius:6,cursor:"pointer",color:P,fontSize:11,fontWeight:700,padding:"2px 8px",flexShrink:0,fontFamily:"inherit"}}>View</button>
                            </div>
                            :<span style={{color:"#B59D7E"}}>—</span>}
                        </td>
                        <td style={{padding:"13px 14px",position:"relative",textAlign:"right"}} onClick={e=>e.stopPropagation()}>
                          <button onClick={e=>{e.stopPropagation();setQbMenuOpen(qbMenuOpen===q.id?null:q.id);}} style={{background:"none",border:"1px solid #E8D9C0",borderRadius:7,cursor:"pointer",color:"#8A6A4E",fontSize:14,fontWeight:700,letterSpacing:"2px",padding:"3px 8px"}}>•••</button>
                          {qbMenuOpen===q.id&&<div style={{position:"absolute",right:8,top:42,background:"#FDF8ED",border:"1px solid #E8D9C0",borderRadius:10,boxShadow:"0 8px 28px rgba(0,0,0,0.15)",zIndex:999,minWidth:160,overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
                            <div onClick={()=>{setEditQData({...q});setShowEditQuestion(true);setQbMenuOpen(null);}} style={{padding:"11px 16px",fontSize:14,color:"#2E1F12",cursor:"pointer"}} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Edit</div>
                            <div onClick={()=>{ setAiParamsQuestion(q); setAiP({ evidenceType:q.aiParams?.evidenceType||"Photo", ocrRequired:q.aiParams?.ocrRequired||false, objectPresenceList:q.aiParams?.objectPresenceList||"", conditionClassification:q.aiParams?.conditionClassification||"", acceptableRanges:q.aiParams?.acceptableRanges||"", autoAcceptAbove:q.aiParams?.autoAcceptAbove||"0.95", flagBelowReview:q.aiParams?.flagBelowReview||"0.70", routingRules:q.aiParams?.routingRules||[], suggestedCAs:q.aiParams?.suggestedCAs||[], newRuleCondition:"", newRuleReviewer:"", selectedCA:"" }); setAiHowToOpen(true); setQbMenuOpen(null); }} style={{padding:"11px 16px",fontSize:14,color:"#2E1F12",cursor:"pointer"}} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>AI Parameters</div>
                            <div style={{height:1,background:"#fee2e2",margin:"2px 0"}}/>
                            <div onClick={()=>{fetch(`${API}/api/admin/questions/${q.id}`,{method:"DELETE",headers:authHeader()}).catch(()=>{});setQuestions(prev=>prev.filter(x=>x.id!==q.id));setQbMenuOpen(null);}} style={{padding:"11px 16px",fontSize:14,color:"#ef4444",cursor:"pointer"}} onMouseOver={e=>e.currentTarget.style.background="#fef2f2"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Delete</div>
                          </div>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filtered.length>0&&(
                <div style={{padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid #f3f4f6",fontSize:13,color:"#8A6A4E"}}>
                  <span>Showing {(qbPage-1)*qbPerPage+1}–{Math.min(qbPage*qbPerPage,filtered.length)} of {filtered.length}</span>
                  <div style={{display:"flex",gap:6}}>
                    <button onClick={()=>setQbPage(p=>Math.max(1,p-1))} disabled={qbPage===1} style={{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",background:"#FDF8ED",border:"1px solid #E8D9C0",borderRadius:6,cursor:qbPage===1?"not-allowed":"pointer",opacity:qbPage===1?0.5:1}}>‹</button>
                    <button onClick={()=>setQbPage(p=>Math.min(totalPages,p+1))} disabled={qbPage>=totalPages} style={{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",background:"#FDF8ED",border:"1px solid #E8D9C0",borderRadius:6,cursor:qbPage>=totalPages?"not-allowed":"pointer",opacity:qbPage>=totalPages?0.5:1}}>›</button>
                  </div>
                </div>
                )}
              </div>
            </div>

            {/* ADD QUESTION MODAL */}
            {showAddQuestion&&(
              <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:400,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
                <div style={{background:"#FDF8ED",borderRadius:16,width:"100%",maxWidth:560,boxShadow:"0 20px 60px rgba(0,0,0,0.3)",position:"relative",maxHeight:"90vh",display:"flex",flexDirection:"column"}} onClick={e=>e.stopPropagation()}>

                  {/* Header */}
                  <div style={{padding:"24px 28px 20px",borderBottom:"1px solid #f3f4f6"}}>
                    <h3 style={{fontSize:18,fontWeight:800,color:"#2E1F12",marginBottom:4}}>New Question</h3>
                    <p style={{fontSize:14,color:"#8A6A4E",margin:0}}>Add a new question to the inspection bank.</p>
                  </div>

                  {/* Body */}
                  <div style={{flex:1,overflowY:"auto",padding:"20px 28px"}}>

                    {/* 1. Question Text */}
                    <div style={{marginBottom:16}}>
                      <label style={{fontSize:13,fontWeight:600,color:"#4A3624",display:"block",marginBottom:4}}>Question Text <span style={{color:"#ef4444"}}>*</span></label>
                      <div style={{fontSize:12,color:"#B59D7E",marginBottom:8}}>The question inspectors will see during inspections</div>
                      <textarea value={newQ.text} onChange={e=>setNewQ({...newQ,text:e.target.value})}
                        placeholder="e.g. Are all fire extinguishers within their service date?" rows={4}
                        style={{width:"100%",padding:"12px 14px",border:`2px solid ${P}`,borderRadius:8,fontSize:14,color:"#2E1F12",fontFamily:"inherit",outline:"none",resize:"none",lineHeight:1.5,boxSizing:"border-box"}}/>
                    </div>

                    {/* 2. Sub Number - manual type only */}
                    <div style={{marginBottom:20}}>
                      <label style={{fontSize:13,fontWeight:600,color:"#4A3624",display:"block",marginBottom:4}}>Sub Number</label>
                      <div style={{fontSize:12,color:"#B59D7E",marginBottom:8}}>e.g. 1.1, 1.1.1, 2.3.4 — type manually</div>
                      <input
                        value={newQ.subNumber}
                        onChange={e=>setNewQ({...newQ,subNumber:e.target.value})}
                        placeholder="e.g. 1.1.1"
                        style={{width:"100%",padding:"10px 14px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#2E1F12",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}}
                      />
                    </div>

                    <div style={{height:1,background:"#F3E7D3",marginBottom:20}}/>

                    {/* 3. Question Type */}
                    <div style={{marginBottom:20}}>
                      <label style={{fontSize:13,fontWeight:600,color:"#4A3624",display:"block",marginBottom:8}}>Question Type</label>
                      <select value={newQ.type} onChange={e=>setNewQ({...newQ,type:e.target.value})}
                        style={{width:"100%",padding:"10px 14px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#4A3624",fontFamily:"inherit",outline:"none",appearance:"none",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")",backgroundRepeat:"no-repeat",backgroundPosition:"right 14px center",cursor:"pointer"}}>
                        <option>Binary (Yes/No)</option>
                        <option>Written Response</option>
                        <option>Measurement</option>
                      </select>
                    </div>

                    <div style={{height:1,background:"#F3E7D3",marginBottom:20}}/>

                    {/* 4. Evidence Required toggle */}
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
                      <div>
                        <div style={{fontSize:13,fontWeight:600,color:"#4A3624",marginBottom:2}}>Evidence Required</div>
                        <div style={{fontSize:12,color:"#B59D7E"}}>Photo or video proof</div>
                      </div>
                      <div onClick={()=>setNewQ({...newQ,evidenceRequired:!newQ.evidenceRequired})}
                        style={{width:48,height:26,borderRadius:13,background:newQ.evidenceRequired?P:"#DECBAB",cursor:"pointer",position:"relative",flexShrink:0,transition:"background 0.2s"}}>
                        <div style={{width:20,height:20,borderRadius:"50%",background:"#FDF8ED",position:"absolute",top:3,left:newQ.evidenceRequired?25:3,transition:"left 0.2s",boxShadow:"0 1px 4px rgba(0,0,0,0.2)"}}/>
                      </div>
                    </div>

                    {/* 4b. Evidence Configuration - only when ON */}
                    {newQ.evidenceRequired&&(
                      <div style={{background:"#F7EFE0",border:"1px solid #E8D9C0",borderRadius:10,padding:"16px 18px",marginBottom:20}}>
                        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                          <span style={{fontSize:13,fontWeight:700,color:"#4A3624"}}>Evidence Configuration</span>
                        </div>
                        <div style={{marginBottom:14}}>
                          <label style={{fontSize:13,fontWeight:600,color:"#4A3624",display:"block",marginBottom:8}}>Evidence Type</label>
                          <select value={newQ.evidenceType} onChange={e=>setNewQ({...newQ,evidenceType:e.target.value})}
                            style={{width:"100%",padding:"10px 14px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#4A3624",fontFamily:"inherit",outline:"none",appearance:"none",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")",backgroundRepeat:"no-repeat",backgroundPosition:"right 14px center",cursor:"pointer",background:"#FDF8ED"}}>
                            <option>Photo</option><option>Video</option><option>Both</option>
                          </select>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                          <div>
                            <div style={{fontSize:13,fontWeight:600,color:"#4A3624",marginBottom:2}}>Require online for AI analysis</div>
                            <div style={{fontSize:12,color:"#B59D7E"}}>Block offline upload; inspector must be connected</div>
                          </div>
                          <div onClick={()=>setNewQ({...newQ,requireOnline:!newQ.requireOnline})}
                            style={{width:48,height:26,borderRadius:13,background:newQ.requireOnline?P:"#DECBAB",cursor:"pointer",position:"relative",flexShrink:0}}>
                            <div style={{width:20,height:20,borderRadius:"50%",background:"#FDF8ED",position:"absolute",top:3,left:newQ.requireOnline?25:3}}/>
                          </div>
                        </div>
                      </div>
                    )}

                    <div style={{height:1,background:"#F3E7D3",marginBottom:20}}/>

                    {/* 5. Guide to Inspection */}
                    <div style={{marginBottom:8}}>
                      <label style={{fontSize:13,fontWeight:600,color:"#4A3624",display:"block",marginBottom:4}}>Guide to Inspection</label>
                      <div style={{fontSize:12,color:"#B59D7E",marginBottom:8}}>Instructions for inspectors — what to check, what pass looks like</div>
                      <textarea value={newQ.inspectionGuide} onChange={e=>setNewQ({...newQ,inspectionGuide:e.target.value})}
                        placeholder="e.g. Check that pressure gauge is in green zone, service tag is within 12 months, and extinguisher is mounted securely." rows={4}
                        style={{width:"100%",padding:"12px 14px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#2E1F12",fontFamily:"inherit",outline:"none",resize:"vertical",lineHeight:1.6,boxSizing:"border-box"}}/>
                    </div>

                  </div>

                  {/* Footer */}
                  <div style={{padding:"16px 28px",borderTop:"1px solid #f3f4f6",display:"flex",gap:10,justifyContent:"flex-end"}}>
                    <button onClick={()=>{setShowAddQuestion(false);setNewQ({text:"",subNumber:"",category:"Deck",subArea:"",type:"Binary (Yes/No)",severity:"Medium",weight:"1",evidenceRequired:false,evidenceType:"Photo",requireOnline:false,inspectionGuide:""}); }}
                      style={{padding:"10px 22px",background:"#FDF8ED",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit",color:"#2E1F12"}}>Cancel</button>
                    <button onClick={async()=>{
                      if(!newQ.text)return;
                      try{
                        const r=await fetch(`${API}/api/admin/questions`,{method:"POST",headers:authHeader(),body:JSON.stringify({question:newQ.text,sub_number:newQ.subNumber,category:newQ.category,sub_area:newQ.subArea,severity:newQ.severity,type:newQ.type,evidence_required:newQ.evidenceRequired,guide_to_inspection:newQ.inspectionGuide})});
                        const d=await r.json();
                        if(d.success){
                          setQuestions(prev=>[...prev,{id:d.data.id,text:d.data.question,subNumber:d.data.sub_number,category:d.data.category,subArea:d.data.sub_area,severity:d.data.severity,type:d.data.type,evidenceRequired:d.data.evidence_required,inspectionGuide:d.data.guide_to_inspection}]);
                          setNewQ({text:"",subNumber:"",category:"Deck",subArea:"",type:"Binary (Yes/No)",severity:"Medium",weight:"1",evidenceRequired:false,evidenceType:"Photo",requireOnline:false,inspectionGuide:""});
                          setQbPage(1);setShowAddQuestion(false);
                        }
                      }catch(e){alert("Error connecting to server");}
                    }} style={{padding:"10px 22px",background:P,border:"none",borderRadius:8,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",color:"#fff"}}>Save Question</button>
                  </div>
                </div>
              </div>
            )}
            {/* EDIT QUESTION MODAL */}
            {showEditQuestion&&editQData&&(
              <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:400,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
                <div style={{background:"#FDF8ED",borderRadius:16,padding:"28px 32px",width:"100%",maxWidth:560,boxShadow:"0 20px 60px rgba(0,0,0,0.3)",position:"relative",maxHeight:"85vh",overflowY:"auto"}} onClick={e=>e.stopPropagation()}>
                  <button onClick={()=>setShowEditQuestion(false)} style={{position:"absolute",top:16,right:16,background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#8A6A4E"}}>✕</button>
                  <h3 style={{fontSize:18,fontWeight:800,color:"#2E1F12",marginBottom:20}}>Edit Question</h3>
                  <div style={{marginBottom:16}}><label style={{fontSize:13,fontWeight:600,color:"#4A3624",display:"block",marginBottom:8}}>Question Text</label><textarea value={editQData.text} onChange={e=>setEditQData({...editQData,text:e.target.value})} rows={3} style={{width:"100%",padding:"12px 14px",border:`2px solid ${P}`,borderRadius:8,fontSize:14,color:"#2E1F12",fontFamily:"inherit",outline:"none",resize:"none",boxSizing:"border-box"}}/></div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
                    <div><label style={{fontSize:13,fontWeight:600,color:"#4A3624",display:"block",marginBottom:8}}>Category</label><select value={editQData.category} onChange={e=>setEditQData({...editQData,category:e.target.value})} style={{width:"100%",padding:"10px 14px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#4A3624",fontFamily:"inherit",outline:"none"}}><option>Deck</option><option>Engine Room</option><option>Bridge</option></select></div>
                    <div><label style={{fontSize:13,fontWeight:600,color:"#4A3624",display:"block",marginBottom:8}}>Sub-Area</label><input value={editQData.subArea||""} onChange={e=>setEditQData({...editQData,subArea:e.target.value})} style={{width:"100%",padding:"10px 14px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#2E1F12",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}}/></div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:24}}>
                    <div><label style={{fontSize:13,fontWeight:600,color:"#4A3624",display:"block",marginBottom:8}}>Type</label><select value={editQData.type} onChange={e=>setEditQData({...editQData,type:e.target.value})} style={{width:"100%",padding:"10px 14px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#4A3624",fontFamily:"inherit",outline:"none"}}><option>Binary (Yes/No)</option><option>Written Response</option><option>Measurement</option></select></div>
                    <div><label style={{fontSize:13,fontWeight:600,color:"#4A3624",display:"block",marginBottom:8}}>Severity</label><select value={editQData.severity} onChange={e=>setEditQData({...editQData,severity:e.target.value})} style={{width:"100%",padding:"10px 14px",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,color:"#4A3624",fontFamily:"inherit",outline:"none"}}><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option><option value="critical">Critical</option></select></div>
                  </div>
                  <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
                    <button onClick={()=>setShowEditQuestion(false)} style={{padding:"10px 22px",background:"#FDF8ED",border:"1.5px solid #E8D9C0",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit",color:"#2E1F12"}}>Cancel</button>
                    <button onClick={()=>{fetch(`${API}/api/admin/questions/${editQData.id}`,{method:"PATCH",headers:authHeader(),body:JSON.stringify({question:editQData.text,sub_number:editQData.subNumber,category:editQData.category,sub_area:editQData.subArea,severity:editQData.severity,type:editQData.type,evidence_required:editQData.evidenceRequired,guide_to_inspection:editQData.inspectionGuide})}).catch(()=>{});setQuestions(prev=>prev.map(x=>x.id===editQData.id?{...editQData}:x));setShowEditQuestion(false);}} style={{padding:"10px 22px",background:P,border:"none",borderRadius:8,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",color:"#fff"}}>Save Changes</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })()}

      {/* CA LIBRARY */}
      {activePage==="calibrary"&&(()=>{
        const sevColors={Critical:"#ef4444",Major:"#f97316",Minor:"#f59e0b",Info:"#3b82f6"};
        const sevBgColors={Critical:"#fef2f2",Major:"#fff7ed",Minor:"#fffbeb",Info:"#eff6ff"};
        const filteredCA=caTemplates.filter(t=>{
          const matchSearch=!caSearch||t.title.toLowerCase().includes(caSearch.toLowerCase());
          const matchStatus=caStatus==="All"||t.status===caStatus;
          const matchSev=caSeverity==="Any severity"||(t.severities||[]).includes(caSeverity);
          return matchSearch&&matchStatus&&matchSev;
        });
        return (
          <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>{ setCaStatusOpen(false); setCaSevOpen(false); setUserMenuOpen(false); setCaMenuOpen(null); }}>
            <TopBar/>
            <div style={{ padding:"28px" }}>

              {/* HOW TO USE */}
              <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
                <button onClick={()=>setShowHowTo(!showHowTo)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                    How to use
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowTo?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
                </button>
                {showHowTo&&(
                  <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>
                    <div style={{ marginTop:20, marginBottom:16 }}>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:10 }}>What this page is for</p>
                      <ul style={{ margin:0, paddingLeft:20 }}>
                        {["This is the central library of corrective actions (recommended fixes) used across inspections.","These are reusable fix templates that can be attached to findings when a question fails.","Purpose: speed up reporting and keep recommendations consistent across inspectors and vessels."].map((t,i)=>(
                          <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:6, lineHeight:1.6 }}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ marginBottom:16 }}>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:10 }}>Typical workflow</p>
                      <ol style={{ margin:0, paddingLeft:20 }}>
                        {["Create action templates for common issues (e.g. corrosion, missing signage, unsafe storage, leaks).","Keep actions short and specific (what to do, where, and what done looks like).","Link these actions to failed questions (either automatically via mappings or manually during review).","Reviewers can still edit the final corrective action per session if needed."].map((t,i)=>(
                          <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:6, lineHeight:1.6 }}>{t}</li>
                        ))}
                      </ol>
                    </div>
                    <div style={{ marginBottom:16 }}>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:10 }}>Key fields explained</p>
                      <ul style={{ margin:0, paddingLeft:20 }}>
                        {[["Title","short name of the fix (used in lists and reports)."],["Description","the exact recommended action (what to do)."],["Severity applicability","which finding severities this applies to (Critical, Major, Minor, Info)."],["Recommended due time","suggested timeframe (e.g. 24 hours, 7 days, next port)."],["Tags (optional)","helps search and auto-suggest actions during review (e.g. fire_safety, engine_room, ppe)."],["Active / Archived","archive old actions instead of deleting to preserve audit history."]].map(([k,v],i)=>(
                          <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:6, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> — {v}</li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ marginBottom:16 }}>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:12 }}>Examples</p>
                      {[
                        { label:"Example A — Fire Safety (Major)", items:[["Title","Replace or service fire extinguisher"],["Description","Replace or repair the extinguisher and confirm correct pressure range; ensure it is mounted securely and accessible; record service date."],["Recommended due","7 days (or before departure if required)"]] },
                        { label:"Example B — Housekeeping (Minor)", items:[["Title","Remove oil residue and fix minor leak source"],["Description","Clean affected area using approved procedure and identify source of leak; tighten fittings or replace gasket; re-check after 24 hours."],["Recommended due","3 days"]] },
                        { label:"Example C — Signage / Compliance (Critical)", items:[["Title","Install required safety signage immediately"],["Description","Install correct signage in required locations and verify visibility and language requirements; take photo evidence after installation."],["Recommended due","24 hours"]] },
                      ].map((ex,ei)=>(
                        <div key={ei} style={{ marginBottom:14 }}>
                          <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>{ex.label}</p>
                          <ul style={{ margin:0, paddingLeft:20 }}>
                            {ex.items.map(([k,v],i)=>(
                              <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:4, lineHeight:1.6 }}><strong>{k}:</strong> {v}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginBottom:16 }}>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:10 }}>Best practice</p>
                      <ul style={{ margin:0, paddingLeft:20 }}>
                        {["Keep descriptions action-focused and measurable (someone should know exactly what fixed means).","Avoid duplicates — use tags and search before creating a new action.","Review and standardize wording so reports stay consistent across different inspectors."].map((t,i)=>(
                          <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      Need help?
                    </div>
                  </div>
                )}
              </div>

              <h1 style={{ fontSize:28, fontWeight:800, color:"#2E1F12", marginBottom:6 }}>Corrective Actions Library</h1>
              <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:22 }}>Reusable corrective action templates</p>

              {/* Filters + Add */}
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20, flexWrap:"wrap" }}>
                <div style={{ flex:1, minWidth:240, display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:10 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  <input value={caSearch} onChange={e=>setCaSearch(e.target.value)} placeholder="Search title or description..." style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
                </div>
                {/* Status dropdown */}
                <div style={{ position:"relative" }} onClick={e=>e.stopPropagation()}>
                  <button onClick={e=>{ e.stopPropagation(); setCaStatusOpen(!caStatusOpen); setCaSevOpen(false); }} style={{ display:"flex", alignItems:"center", gap:8, background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", fontSize:14, color:"#4A3624", cursor:"pointer", fontFamily:"inherit", minWidth:110 }}>
                    <span style={{ flex:1, textAlign:"left" }}>{caStatus}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  {caStatusOpen&&<div style={{ position:"absolute", top:44, left:0, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:300, minWidth:130, overflow:"hidden" }}>
                    {["Active","Archived","All"].map(opt=><div key={opt} onClick={()=>{ setCaStatus(opt); setCaStatusOpen(false); }} style={{ padding:"10px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer", background:opt===caStatus?"#F7EFE0":"#fff", display:"flex", alignItems:"center", gap:10 }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background=opt===caStatus?"#F7EFE0":"#fff"}>{opt===caStatus&&<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>}{opt!==caStatus&&<span style={{ width:13 }}/>}{opt}</div>)}
                  </div>}
                </div>
                {/* Severity dropdown */}
                <div style={{ position:"relative" }} onClick={e=>e.stopPropagation()}>
                  <button onClick={e=>{ e.stopPropagation(); setCaSevOpen(!caSevOpen); setCaStatusOpen(false); }} style={{ display:"flex", alignItems:"center", gap:8, background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", fontSize:14, color:"#4A3624", cursor:"pointer", fontFamily:"inherit", minWidth:130 }}>
                    <span style={{ flex:1, textAlign:"left" }}>{caSeverity}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  {caSevOpen&&<div style={{ position:"absolute", top:44, left:0, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:300, minWidth:140, overflow:"hidden" }}>
                    {["Any severity","Critical","Major","Minor","Info"].map(opt=><div key={opt} onClick={()=>{ setCaSeverity(opt); setCaSevOpen(false); }} style={{ padding:"10px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer", background:opt===caSeverity?"#F7EFE0":"#fff", display:"flex", alignItems:"center", gap:10 }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background=opt===caSeverity?"#F7EFE0":"#fff"}>{opt===caSeverity&&<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>}{opt!==caSeverity&&<span style={{ width:13 }}/>}{opt}</div>)}
                  </div>}
                </div>
                {/* Filter by tag */}
                <div style={{ display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:8, minWidth:140 }}>
                  <input value={caTagFilter} onChange={e=>setCaTagFilter(e.target.value)} placeholder="Filter by tag" style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit", background:"transparent" }}/>
                </div>
                <button onClick={e=>{ e.stopPropagation(); setShowAddCA(true); setNewCA({title:"",description:"",severities:[],dueDays:"",tags:"",status:"Active"}); }}
                  style={{ display:"flex", alignItems:"center", gap:8, background:P, color:"#fff", border:"none", borderRadius:8, padding:"10px 20px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap" }}>
                  + Add Template
                </button>
              </div>
              <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"visible" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                  <thead><tr style={{ borderBottom:"2px solid #f3f4f6" }}>{["TITLE","SEVERITY","DUE (DAYS)","TAGS","STATUS",""].map(h=><th key={h} style={{ textAlign:"left", padding:"13px 16px", color:"#8A6A4E", fontWeight:700, fontSize:11, letterSpacing:"0.06em" }}>{h}</th>)}</tr></thead>
                  <tbody>
                    {filteredCA.length===0?<tr><td colSpan={6}><EmptyState msg="No CA templates yet. Click Add Template to create one."/></td></tr>:filteredCA.map(t=>(
                      <tr key={t.id} style={{ borderBottom:"1px solid #f3f4f6" }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                        <td style={{ padding:"14px 16px" }}><div style={{ fontWeight:600, color:"#2E1F12" }}>{t.title}</div>{t.description&&<div style={{ fontSize:12, color:"#B59D7E", marginTop:2 }}>{t.description.length>80?t.description.slice(0,80)+"…":t.description}</div>}</td>
                        <td style={{ padding:"14px 16px" }}><div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>{(t.severities||[]).map(s=><span key={s} style={{ background:sevBgColors[s]||"#F3E7D3", color:sevColors[s]||"#4A3624", borderRadius:20, padding:"3px 10px", fontSize:12, fontWeight:600 }}>{s}</span>)}</div></td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{t.dueDays||"—"}</td>
                        <td style={{ padding:"14px 16px" }}><div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>{(t.tags||"").split(",").filter(Boolean).map(tag=><span key={tag} style={{ background:"#F2EBDD", color:"#4A3624", borderRadius:6, padding:"2px 9px", fontSize:12 }}>{tag.trim()}</span>)}</div></td>
                        <td style={{ padding:"14px 16px" }}><span style={{ background:t.status==="Active"?P:"#F3E7D3", color:t.status==="Active"?"#fff":"#8A6A4E", borderRadius:20, padding:"4px 14px", fontSize:12, fontWeight:600 }}>{t.status||"Active"}</span></td>
                        <td style={{ padding:"14px 16px", position:"relative", textAlign:"right" }} onClick={e=>e.stopPropagation()}>
                          <button onClick={e=>{ e.stopPropagation(); setCaMenuOpen(caMenuOpen===t.id?null:t.id); }} style={{ background:"none", border:"1px solid #E8D9C0", borderRadius:7, cursor:"pointer", color:"#8A6A4E", fontSize:14, fontWeight:700, letterSpacing:"2px", padding:"3px 8px" }}>•••</button>
                          {caMenuOpen===t.id&&<div style={{ position:"absolute", right:8, top:44, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 28px rgba(0,0,0,0.15)", zIndex:999, minWidth:140, overflow:"hidden" }} onClick={e=>e.stopPropagation()}>
                            <div onClick={()=>{ setEditCAData({...t}); setShowEditCA(true); setCaMenuOpen(null); }} style={{ padding:"11px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Edit</div>
                            <div onClick={()=>{ fetch(`${API}/api/admin/ca-library/${t.id}`,{method:"DELETE",headers:authHeader()}).catch(()=>{}); setCaTemplates(prev=>prev.filter(x=>x.id!==t.id)); setCaMenuOpen(null); }} style={{ padding:"11px 16px", fontSize:14, color:"#ef4444", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#fef2f2"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Delete</div>
                          </div>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {showAddCA&&(
              <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
                <div style={{ background:"#FDF8ED", borderRadius:16, width:"100%", maxWidth:560, boxShadow:"0 24px 64px rgba(0,0,0,0.28)", position:"relative", maxHeight:"88vh", display:"flex", flexDirection:"column" }} onClick={e=>e.stopPropagation()}>
                  <div style={{ padding:"24px 28px 18px", borderBottom:"1px solid #f3f4f6" }}>
                    <h3 style={{ fontSize:19, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Add CA Template</h3>
                    <p style={{ fontSize:14, color:"#8A6A4E" }}>Create a reusable corrective action template.</p>
                  </div>
                  <div style={{ flex:1, overflowY:"auto", padding:"20px 28px" }}>
                    <div style={{ marginBottom:16 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Title <span style={{ color:"#ef4444" }}>*</span></label><input value={newCA.title} onChange={e=>setNewCA({...newCA,title:e.target.value})} placeholder="e.g. Replace fire extinguisher" style={{ ...inputStyle, border:`2px solid ${newCA.title?P:"#E8D9C0"}` }}/></div>
                    <div style={{ marginBottom:16 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Description</label><textarea value={newCA.description} onChange={e=>setNewCA({...newCA,description:e.target.value})} placeholder="Describe the corrective action..." rows={3} style={{ ...inputStyle, resize:"vertical", lineHeight:1.5 }}/></div>
                    <div style={{ marginBottom:16 }}>
                      <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Severity Applicability</label>
                      <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                        {["Critical","Major","Minor","Info"].map(s=>{ const sel=(newCA.severities||[]).includes(s); return <button key={s} onClick={()=>setNewCA(prev=>({...prev,severities:sel?prev.severities.filter(x=>x!==s):[...(prev.severities||[]),s]}))} style={{ padding:"6px 14px", borderRadius:20, border:`2px solid ${sel?P:"#E8D9C0"}`, background:sel?P:"#fff", color:sel?"#fff":"#4A3624", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>{s}</button>; })}
                      </div>
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
                      <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Recommended Due (days)</label><input type="number" min="1" value={newCA.dueDays} onChange={e=>setNewCA({...newCA,dueDays:e.target.value})} placeholder="e.g. 7" style={inputStyle}/></div>
                      <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Tags (comma-separated)</label><input value={newCA.tags} onChange={e=>setNewCA({...newCA,tags:e.target.value})} placeholder="e.g. fire-safety, ppe" style={inputStyle}/></div>
                    </div>
                  </div>
                  <div style={{ padding:"16px 28px", borderTop:"1px solid #f3f4f6", display:"flex", gap:10, justifyContent:"flex-end" }}>
                    <button onClick={()=>{ setShowAddCA(false); setNewCA({title:"",description:"",severities:[],dueDays:"",tags:"",status:"Active"}); }} style={{ padding:"10px 24px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
                    <button onClick={async()=>{ if(!newCA.title)return; try{ const r=await fetch(`${API}/api/admin/ca-library`,{method:"POST",headers:authHeader(),body:JSON.stringify({title:newCA.title,description:newCA.description,severity:(newCA.severities||[]).join(","),category:newCA.tags})}); const d=await r.json(); if(d.success){ setCaTemplates(prev=>[...prev,{id:d.data.id,...newCA,status:"Active"}]); setNewCA({title:"",description:"",severities:[],dueDays:"",tags:"",status:"Active"}); setShowAddCA(false);} }catch(e){alert("Error");} }} style={{ padding:"10px 24px", background:newCA.title?P:"#B59D7E", border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:newCA.title?"pointer":"not-allowed", fontFamily:"inherit", color:"#fff" }}>Save Template</button>
                  </div>
                </div>
              </div>
            )}
            {showEditCA&&editCAData&&(
              <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
                <div style={{ background:"#FDF8ED", borderRadius:16, width:"100%", maxWidth:560, boxShadow:"0 24px 64px rgba(0,0,0,0.28)", position:"relative", maxHeight:"88vh", display:"flex", flexDirection:"column" }} onClick={e=>e.stopPropagation()}>
                  <div style={{ padding:"24px 28px 18px", borderBottom:"1px solid #f3f4f6" }}><h3 style={{ fontSize:19, fontWeight:800, color:"#2E1F12" }}>Edit CA Template</h3></div>
                  <div style={{ flex:1, overflowY:"auto", padding:"20px 28px" }}>
                    <div style={{ marginBottom:16 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Title</label><input value={editCAData.title} onChange={e=>setEditCAData({...editCAData,title:e.target.value})} style={{ ...inputStyle, border:`2px solid ${P}` }}/></div>
                    <div style={{ marginBottom:16 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Description</label><textarea value={editCAData.description||""} onChange={e=>setEditCAData({...editCAData,description:e.target.value})} rows={3} style={{ ...inputStyle, resize:"vertical", lineHeight:1.5 }}/></div>
                    <div style={{ marginBottom:16 }}>
                      <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Severity Applicability</label>
                      <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                        {["Critical","Major","Minor","Info"].map(s=>{ const sel=(editCAData.severities||[]).includes(s); return <button key={s} onClick={()=>setEditCAData(prev=>({...prev,severities:sel?prev.severities.filter(x=>x!==s):[...(prev.severities||[]),s]}))} style={{ padding:"6px 14px", borderRadius:20, border:`2px solid ${sel?P:"#E8D9C0"}`, background:sel?P:"#fff", color:sel?"#fff":"#4A3624", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>{s}</button>; })}
                      </div>
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                      <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Due (days)</label><input type="number" value={editCAData.dueDays||""} onChange={e=>setEditCAData({...editCAData,dueDays:e.target.value})} style={inputStyle}/></div>
                      <div><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Tags</label><input value={editCAData.tags||""} onChange={e=>setEditCAData({...editCAData,tags:e.target.value})} style={inputStyle}/></div>
                    </div>
                  </div>
                  <div style={{ padding:"16px 28px", borderTop:"1px solid #f3f4f6", display:"flex", gap:10, justifyContent:"flex-end" }}>
                    <button onClick={()=>{ setShowEditCA(false); }} style={{ padding:"10px 24px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
                    <button onClick={()=>{ fetch(`${API}/api/admin/ca-library/${editCAData.id}`,{method:"PATCH",headers:authHeader(),body:JSON.stringify({title:editCAData.title,description:editCAData.description,severity:(editCAData.severities||[]).join(","),category:editCAData.tags})}).catch(()=>{}); setCaTemplates(prev=>prev.map(x=>x.id===editCAData.id?{...x,...editCAData}:x)); setShowEditCA(false); }} style={{ padding:"10px 24px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Save Changes</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })()}

      {/* AI KNOWLEDGE (RAG) */}
      {activePage==="knowledge"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>{ setUserMenuOpen(false); }}>
          <div style={{ padding:"32px 40px" }}>
            <h1 style={{ fontSize:28, fontWeight:800, margin:"0 0 4px" }}>AI Knowledge Base</h1>
            <p style={{ color:"#8A6A4E", margin:"0 0 24px" }}>Upload manuals, policies, or paste text. The AI will answer inspector questions using these documents.</p>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24 }}>
              {/* Upload card */}
              <div style={{ background:"#FDF8ED", borderRadius:16, border:"1px solid #E8D9C0", padding:24 }}>
                <h3 style={{ fontSize:16, fontWeight:700, margin:"0 0 16px" }}>➕ Add Document</h3>
                <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Title</label>
                <input value={kbTitle} onChange={e=>setKbTitle(e.target.value)} placeholder="e.g. Fire Safety Policy" style={{ width:"100%", padding:"10px 12px", border:"1px solid #DECBAB", borderRadius:8, marginTop:6, marginBottom:16, boxSizing:"border-box", fontFamily:"inherit", fontSize:14 }}/>

                <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Upload PDF/Text file</label>
                <input type="file" id="kb-file" accept=".pdf,.txt,.md" style={{ width:"100%", marginTop:6, marginBottom:16, fontSize:13 }}/>

                <div style={{ textAlign:"center", color:"#B59D7E", fontSize:13, margin:"4px 0 12px" }}>— OR paste text —</div>

                <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Paste text</label>
                <textarea value={kbText} onChange={e=>setKbText(e.target.value)} rows={5} placeholder="Paste policy / manual text here..." style={{ width:"100%", padding:"10px 12px", border:"1px solid #DECBAB", borderRadius:8, marginTop:6, marginBottom:16, boxSizing:"border-box", fontFamily:"inherit", fontSize:14, resize:"vertical" }}/>

                <button disabled={kbBusy} onClick={()=>{
                  const fileInput = document.getElementById("kb-file");
                  const file = fileInput && fileInput.files && fileInput.files[0];
                  if(!file && !kbText.trim()){ alert("Add a file or paste text"); return; }
                  setKbBusy(true);
                  const fd = new FormData();
                  fd.append("title", kbTitle || (file ? file.name : "Untitled"));
                  if(file) fd.append("file", file);
                  if(kbText.trim()) fd.append("text", kbText);
                  fetch(`${API}/api/rag/upload`,{ method:"POST", headers:{ Authorization:authHeader().Authorization }, body:fd })
                    .then(r=>r.json()).then(d=>{
                      setKbBusy(false);
                      if(d.success){ alert("Document added! "+(d.message||"")); setKbTitle(""); setKbText(""); if(fileInput) fileInput.value=""; loadKnowledge(); }
                      else alert(d.message||"Upload failed");
                    }).catch(()=>{ setKbBusy(false); alert("Upload failed"); });
                }} style={{ width:"100%", padding:"12px", background:kbBusy?"#B59D7E":P, color:"#fff", border:"none", borderRadius:8, fontSize:15, fontWeight:700, cursor:kbBusy?"default":"pointer", fontFamily:"inherit" }}>{kbBusy?"Uploading...":"Upload to Knowledge Base"}</button>
              </div>

              {/* Documents list card */}
              <div style={{ background:"#FDF8ED", borderRadius:16, border:"1px solid #E8D9C0", padding:24 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
                  <h3 style={{ fontSize:16, fontWeight:700, margin:0 }}>📚 Documents ({knowledgeDocs.length})</h3>
                  <button onClick={loadKnowledge} style={{ padding:"6px 12px", background:"#F3E7D3", border:"1px solid #E8D9C0", borderRadius:6, cursor:"pointer", fontSize:13, fontFamily:"inherit" }}>Refresh</button>
                </div>
                {knowledgeDocs.length===0
                  ? <div style={{ textAlign:"center", color:"#B59D7E", padding:"40px 0", fontSize:14 }}>No documents yet.<br/>Upload one to teach the AI.</div>
                  : knowledgeDocs.map(doc=>(
                    <div key={doc.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 14px", border:"1px solid #f3f4f6", borderRadius:8, marginBottom:8 }}>
                      <div>
                        <div style={{ fontWeight:700, fontSize:14 }}>📄 {doc.title}</div>
                        <div style={{ fontSize:12, color:"#8A6A4E", marginTop:2 }}>{doc.chunk_count} chunks · {doc.char_count} chars</div>
                      </div>
                      <button onClick={()=>{
                        if(!window.confirm("Delete this document?")) return;
                        fetch(`${API}/api/rag/documents/${doc.id}`,{ method:"DELETE", headers:authHeader() }).then(r=>r.json()).then(d=>{ if(d.success) loadKnowledge(); });
                      }} style={{ padding:"6px 10px", background:"#fef2f2", color:"#ef4444", border:"1px solid #fecaca", borderRadius:6, cursor:"pointer", fontSize:12, fontFamily:"inherit" }}>Delete</button>
                    </div>
                  ))
                }
              </div>
            </div>

            <div style={{ marginTop:24, padding:16, background:"#eff6ff", border:"1px solid #bfdbfe", borderRadius:12, fontSize:13, color:"#1e40af" }}>
              💡 <b>How it works:</b> When an inspector asks the AI a question, it first checks these documents. If the answer is here, it uses your document. If not, it uses general maritime knowledge.
            </div>
          </div>
        </div>
      )}

      {/* TEMPLATES LIST */}
      {activePage==="templates"&&!selectedTemplate&&!selectedDraft&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>{ setUserMenuOpen(false); setTmplMenuOpen(null); }}>
          <TopBar/>
          <div style={{ padding:"28px" }}>

            {/* HOW TO USE */}
            <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <button onClick={()=>setShowHowToTmpl(!showHowToTmpl)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  How to use
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowToTmpl?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
              </button>
              {showHowToTmpl&&(
                <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>
                  <div style={{ marginTop:20, marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>What this page is for</p>
                    <p style={{ fontSize:14, color:"#4A3624", lineHeight:1.7 }}>Manage inspection Templates — your inspection-program blueprints. Templates define categories, sub-areas, and the question structure used later in sessions.</p>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Typical workflow</p>
                    <ol style={{ margin:0, paddingLeft:20 }}>
                      {["Create a template and give it a clear name.","Add and organise questions from the Question Bank.","Create a version, configure profiles, and publish it.","Use the published version when creating assignments."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}
                    </ol>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Key things on this page</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {[["Template","the blueprint (not executed directly)."],["Categories / Sub-areas","organise the inspection flow and analytics."],["Questions","pulled from the Question Bank; reused across templates."],["Latest Version","the most recent version number."],["Drafts","how many unpublished versions exist."]].map(([k,v],i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> — {v}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Examples</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {['"Standard Ship Inspection (full coverage)"','"Quick Spot-Check (shorter scope, higher focus on critical)"','"Compliance-heavy (strict evidence requirements)"'].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5 }}>{t}</li>)}
                    </ul>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Best practice</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {["Keep naming consistent for categories and sub-areas — this drives clean analytics.","Prefer creating new versions instead of editing what's already in use.","Archive templates you no longer need rather than deleting them."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}
                    </ul>
                  </div>
                  {/* Info box */}
                  <div style={{ background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:10, padding:"14px 18px", marginBottom:14 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      <span style={{ fontSize:13, fontWeight:700, color:P }}>Template vs Assignment vs Session</span>
                    </div>
                    {[["Template","the blueprint / program design."],["Assignment","a planned job: inspector + vessel + due date."],["Session","the actual inspection run where answers and evidence are captured, synced, scored, and reported."]].map(([k,v])=>(
                      <div key={k} style={{ fontSize:13, color:"#4A3624", marginBottom:4, lineHeight:1.6 }}><strong>{k}</strong> — {v}</div>
                    ))}
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    Need help? Open in full view
                  </div>
                </div>
              )}
            </div>

            <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Templates</h1>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Inspection template management</p>
            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:16 }}>
              <div style={{ flex:1, maxWidth:480, display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:10 }}>
                <span style={{ color:"#B59D7E" }}>🔍</span>
                <input value={tmplSearch} onChange={e=>setTmplSearch(e.target.value)} placeholder="Search..." style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
              </div>
              <button onClick={e=>{ e.stopPropagation(); setShowCreateTemplate(true); }} style={{ display:"flex", alignItems:"center", gap:8, background:P, color:"#fff", border:"none", borderRadius:24, padding:"10px 22px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>+ Create Template</button>
            </div>
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"visible" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["TEMPLATE NAME","LATEST VERSION","DRAFTS","STATUS",""].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:600, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
                <tbody>
                  {templates.filter(t=>!tmplSearch||t.name.toLowerCase().includes(tmplSearch.toLowerCase())).length===0
                    ?<tr><td colSpan={5}><EmptyState msg="No templates yet. Click Create Template to start."/></td></tr>
                    :templates.filter(t=>!tmplSearch||t.name.toLowerCase().includes(tmplSearch.toLowerCase())).map(t=>(
                      <tr key={t.id} style={{ borderBottom:"1px solid #f9fafb", cursor:"pointer" }} onClick={()=>{ setSelectedTemplate(t); setSelectedDraft(null); setTmplMenuOpen(null); }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                        <td style={{ padding:"14px 16px", fontWeight:600, color:"#2E1F12" }}>{t.name}{t.description&&<div style={{ fontSize:12, color:"#B59D7E", fontWeight:400, marginTop:2 }}>{t.description}</div>}</td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{t.version||"—"}</td>
                        <td style={{ padding:"14px 16px" }}><span style={{ background:"#F3E7D3", color:"#4A3624", borderRadius:20, padding:"3px 12px", fontSize:12 }}>{t.drafts||0} drafts</span></td>
                        <td style={{ padding:"14px 16px" }}>{t.status==="Published"?<span style={{ background:P, color:"#fff", borderRadius:20, padding:"4px 14px", fontSize:12, fontWeight:600 }}>Published</span>:<span style={{ background:"#FDF8ED", color:"#4A3624", borderRadius:20, padding:"3px 12px", fontSize:12, border:"1.5px solid #E8D9C0" }}>Draft</span>}</td>
                        <td style={{ padding:"14px 16px", position:"relative", textAlign:"right", width:56 }} onClick={e=>e.stopPropagation()}>
                          <button onClick={e=>{ e.stopPropagation(); setTmplMenuOpen(tmplMenuOpen===t.id?null:t.id); }} style={{ background:"none", border:"1px solid #E8D9C0", borderRadius:7, cursor:"pointer", color:"#8A6A4E", fontSize:14, fontWeight:700, letterSpacing:"2px", padding:"3px 8px" }}>•••</button>
                          {tmplMenuOpen===t.id&&<div style={{ position:"absolute", right:8, top:44, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 28px rgba(0,0,0,0.15)", zIndex:999, minWidth:160, overflow:"hidden" }} onClick={e=>e.stopPropagation()}>
                            <div onClick={()=>{ setEditTmplData({...t}); setShowEditTemplate(true); setTmplMenuOpen(null); }} style={{ padding:"11px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Edit</div>
                            <div onClick={()=>{ fetch(`${API}/api/admin/templates/${t.id}`,{method:"DELETE",headers:authHeader()}).catch(()=>{}); setTemplates(prev=>prev.filter(x=>x.id!==t.id)); setTmplMenuOpen(null); }} style={{ padding:"11px 16px", fontSize:14, color:"#ef4444", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#fef2f2"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Delete</div>
                          </div>}
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
          {showCreateTemplate&&(
            <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <div style={{ background:"#FDF8ED", borderRadius:16, padding:"28px 32px", width:"100%", maxWidth:560, boxShadow:"0 20px 60px rgba(0,0,0,0.3)", position:"relative" }} onClick={e=>e.stopPropagation()}>
                <button onClick={()=>{ setShowCreateTemplate(false); setNewTmpl({name:"",description:""}); }} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
                <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Create Template</h3>
                <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Add a new inspection program.</p>
                <div style={{ marginBottom:16 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Template Name <span style={{ color:"#ef4444" }}>*</span></label><input value={newTmpl.name} onChange={e=>setNewTmpl({...newTmpl,name:e.target.value})} placeholder="e.g. Annual Safety Inspection" style={{ ...inputStyle, border:`2px solid ${P}` }}/></div>
                <div style={{ marginBottom:28 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Description</label><textarea value={newTmpl.description} onChange={e=>setNewTmpl({...newTmpl,description:e.target.value})} rows={3} style={{ ...inputStyle, resize:"vertical" }}/></div>
                <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
                  <button onClick={()=>{ setShowCreateTemplate(false); setNewTmpl({name:"",description:""}); }} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
                  <button onClick={async()=>{ if(!newTmpl.name)return; try{ const r=await fetch(`${API}/api/admin/templates`,{method:"POST",headers:authHeader(),body:JSON.stringify({name:newTmpl.name,description:newTmpl.description,version:"1.0",sections:{status:"Draft",drafts:0,draftVersions:[]}})}); const d=await r.json(); if(d.success){ const t={id:d.data.id,name:d.data.name,description:d.data.description,version:"—",drafts:0,status:"Draft",draftVersions:[]}; setTemplates(prev=>[...prev,t]); setNewTmpl({name:"",description:""}); setShowCreateTemplate(false); setSelectedTemplate(t);} }catch(e){alert("Error creating template");} }} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Create Template</button>
                </div>
              </div>
            </div>
          )}
          {showEditTemplate&&editTmplData&&(
            <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <div style={{ background:"#FDF8ED", borderRadius:16, padding:"28px 32px", width:"100%", maxWidth:560, boxShadow:"0 20px 60px rgba(0,0,0,0.3)", position:"relative" }} onClick={e=>e.stopPropagation()}>
                <button onClick={()=>{ setShowEditTemplate(false); setEditTmplData(null); }} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
                <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:20 }}>Edit Template</h3>
                <div style={{ marginBottom:16 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Template Name</label><input value={editTmplData.name} onChange={e=>setEditTmplData({...editTmplData,name:e.target.value})} style={{ ...inputStyle, border:`2px solid ${P}` }}/></div>
                <div style={{ marginBottom:28 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Description</label><textarea value={editTmplData.description||""} onChange={e=>setEditTmplData({...editTmplData,description:e.target.value})} rows={3} style={{ ...inputStyle, resize:"vertical" }}/></div>
                <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
                  <button onClick={()=>{ setShowEditTemplate(false); setEditTmplData(null); }} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
                  <button onClick={()=>{ fetch(`${API}/api/admin/templates/${editTmplData.id}`,{method:"PATCH",headers:authHeader(),body:JSON.stringify({name:editTmplData.name,description:editTmplData.description})}).catch(()=>{}); setTemplates(prev=>prev.map(t=>t.id===editTmplData.id?{...t,...editTmplData}:t)); setShowEditTemplate(false); setEditTmplData(null); }} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Save Changes</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TEMPLATE VERSIONS */}
      {activePage==="templates"&&selectedTemplate&&!selectedDraft&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>setUserMenuOpen(false)}>
          <TopBar/>
          <div style={{ padding:"28px" }}>

            {/* HOW TO USE */}
            <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <button onClick={()=>setShowHowToBuilder(!showHowToBuilder)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  How to use
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowToBuilder?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
              </button>
              {showHowToBuilder&&(
                <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>
                  <div style={{ marginTop:20, marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>What this page is for</p>
                    <p style={{ fontSize:14, color:"#4A3624", lineHeight:1.7 }}>Create and manage Template Versions — published snapshots that are used in assignments. Each version is a frozen copy so past inspections are never altered.</p>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Typical workflow</p>
                    <ol style={{ margin:0, paddingLeft:20 }}>
                      {["Create a new draft version.","Configure scope mode and profiles in the builder.","Test/preview the configuration.","Publish the version.","Use it when creating assignments."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}
                    </ol>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Key things on this page</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {[["Why versions exist","auditability. Past inspections must reference the exact rules used at the time."],["Draft","work-in-progress; can be edited freely."],["Published","locked and available for assignments."]].map(([k,v],i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> — {v}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Examples</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {['"v1.0 — baseline program"','"v1.1 — adds new engine checks and updated weights"'].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5 }}>{t}</li>)}
                    </ul>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Best practice</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {["If a version is already used in assignments, create a new version for changes.","Always run Test/Preview in the builder before publishing."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}
                    </ul>
                  </div>
                  <div style={{ background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:10, padding:"14px 18px", marginBottom:14 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      <span style={{ fontSize:13, fontWeight:700, color:P }}>Template vs Assignment vs Session</span>
                    </div>
                    {[["Template","the blueprint / program design."],["Assignment","a planned job: inspector + vessel + due date."],["Session","the actual inspection run where answers and evidence are captured, synced, scored, and reported."]].map(([k,v])=>(
                      <div key={k} style={{ fontSize:13, color:"#4A3624", marginBottom:4, lineHeight:1.6 }}><strong>{k}</strong> — {v}</div>
                    ))}
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    Need help? Open in full view
                  </div>
                </div>
              )}
            </div>

            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              <span onClick={()=>setSelectedTemplate(null)} style={{ cursor:"pointer", fontSize:20, color:"#4A3624" }}>←</span>
              <div>
                <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:2 }}>Template Versions</h1>
                <div style={{ fontSize:14, color:"#8A6A4E" }}>{selectedTemplate.name}</div>
              </div>
            </div>
            <div style={{ marginBottom:16 }}>
              <button onClick={e=>{ e.stopPropagation(); setShowNewDraft(true); setNewDraftVersion("1.0"); }} style={{ display:"flex", alignItems:"center", gap:8, background:P, color:"#fff", border:"none", borderRadius:8, padding:"10px 22px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>
                + New Draft
              </button>
            </div>
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["VERSION","STATUS","CREATED",""].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:600, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
                <tbody>
                  {(selectedTemplate.draftVersions||[]).length===0
                    ?<tr><td colSpan={4}><div style={{ textAlign:"center", padding:"48px 0" }}><div style={{ fontSize:14, color:"#B59D7E", marginBottom:8 }}>No versions yet</div><div style={{ fontSize:13, color:"#DECBAB" }}>Click "+ New Draft" to create the first version</div></div></td></tr>
                    :(selectedTemplate.draftVersions||[]).map(d=>(
                      <tr key={d.id} style={{ borderBottom:"1px solid #f9fafb", cursor:"pointer" }} onClick={()=>{ setSelectedDraft(d); setBuilderTab("Structure"); setTmplStructure(d.structure||[]); }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                        <td style={{ padding:"14px 16px", fontWeight:600, color:"#2E1F12" }}>{d.version}</td>
                        <td style={{ padding:"14px 16px" }}>{d.status==="Published"?<span style={{ background:P, color:"#fff", borderRadius:20, padding:"4px 14px", fontSize:12, fontWeight:600 }}>Published</span>:<span style={{ background:"#FDF8ED", color:"#4A3624", borderRadius:20, padding:"3px 12px", fontSize:12, border:"1.5px solid #E8D9C0" }}>Draft</span>}</td>
                        <td style={{ padding:"14px 16px", color:"#8A6A4E" }}>{d.created}</td>
                        <td style={{ padding:"14px 16px", textAlign:"right" }} onClick={e=>e.stopPropagation()}>
                          <button onClick={()=>{ const copy={id:Date.now(),version:d.version+" (copy)",status:"Draft",structure:d.structure||[],created:new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}; const updated={...selectedTemplate,draftVersions:[...(selectedTemplate.draftVersions||[]),copy],drafts:(selectedTemplate.drafts||0)+1}; setTemplates(prev=>prev.map(t=>t.id===selectedTemplate.id?updated:t)); setSelectedTemplate(updated); saveTemplateToBackend(updated); }}
                            style={{ padding:"6px 16px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#4A3624" }}>Duplicate</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
          {showNewDraft&&(
            <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <div style={{ background:"#FDF8ED", borderRadius:16, padding:"28px 32px", width:"100%", maxWidth:480, boxShadow:"0 20px 60px rgba(0,0,0,0.3)", position:"relative" }} onClick={e=>e.stopPropagation()}>
                <button onClick={()=>setShowNewDraft(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
                <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>New Draft Version</h3>
                <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Create a new draft version to configure and publish.</p>
                <div style={{ marginBottom:28 }}>
                  <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Version (e.g. 1.0, 2.1)</label>
                  <input value={newDraftVersion} onChange={e=>setNewDraftVersion(e.target.value)} style={{ ...inputStyle, border:`2px solid ${P}` }}/>
                </div>
                <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
                  <button onClick={()=>setShowNewDraft(false)} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
                  <button onClick={()=>{ if(!newDraftVersion)return; const draft={id:Date.now(),version:newDraftVersion,status:"Draft",structure:[],created:new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}; const updatedTemplate={...selectedTemplate,draftVersions:[...(selectedTemplate.draftVersions||[]),draft],version:newDraftVersion,drafts:(selectedTemplate.drafts||0)+1}; setTemplates(prev=>prev.map(t=>t.id===selectedTemplate.id?updatedTemplate:t)); setSelectedTemplate(updatedTemplate); saveTemplateToBackend(updatedTemplate); setShowNewDraft(false); setSelectedDraft(draft); setBuilderTab("Structure"); setTmplStructure([]); }} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Create Draft</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TEMPLATE BUILDER */}
      {activePage==="templates"&&selectedTemplate&&selectedDraft&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>{ setUserMenuOpen(false); setScopeModeOpen(false); }}>
          <TopBar/>
          <div style={{ padding:"28px" }}>

            {/* HOW TO USE */}
            <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <button onClick={()=>setShowHowToBuilder(!showHowToBuilder)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  How to use
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowToBuilder?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
              </button>
              {showHowToBuilder&&(
                <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>
                  <div style={{ marginTop:20, marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>What this page is for</p>
                    <p style={{ fontSize:14, color:"#4A3624", lineHeight:1.7 }}>Configure exactly how inspections run for this template version: scope mode, question selection, scoring rules, AI behaviour, and report format.</p>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Typical workflow</p>
                    <ol style={{ margin:0, paddingLeft:20 }}>
                      {["Select the scope mode (Standard / Spot-Check / Risk-Based).","Choose the profiles that apply.","Review the question grouping in the Structure tab.","Run Test/Preview to validate.","Publish when ready."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}
                    </ol>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Key things on this page</p>
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:6 }}>Scope mode</p>
                    <ul style={{ margin:"0 0 12px", paddingLeft:20 }}>
                      {[["Standard","full checklist, every question shown."],["Spot-Check","system selects a subset at the start."],["Risk-Based",'full list but "Suggested Next" prioritises high-risk items.']].map(([k,v],i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> — {v}</li>
                      ))}
                    </ul>
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:6 }}>Profiles</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {[["Randomness Profile","used only for Spot-Check / Risk-Based."],["Scoring Profile","decides pass / conditional / fail outcomes."],["AI Profile","confidence thresholds and review routing."],["Report Profile","report sections, formatting, and tone."]].map(([k,v],i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> — {v}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Examples</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {['"Launch config: Standard + Balanced scoring + Conservative AI + Standard report"','"Spot-check config: Spot-Check + Standard randomness + Balanced scoring"'].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5 }}>{t}</li>)}
                    </ul>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Best practice</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {["Always run Test/Preview before publishing.","Don't change published versions — publish a new one instead."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}
                    </ul>
                  </div>
                  <div style={{ background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:10, padding:"14px 18px", marginBottom:14 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      <span style={{ fontSize:13, fontWeight:700, color:P }}>Template vs Assignment vs Session</span>
                    </div>
                    {[["Template","the blueprint / program design."],["Assignment","a planned job: inspector + vessel + due date."],["Session","the actual inspection run where answers and evidence are captured, synced, scored, and reported."]].map(([k,v])=>(
                      <div key={k} style={{ fontSize:13, color:"#4A3624", marginBottom:4, lineHeight:1.6 }}><strong>{k}</strong> — {v}</div>
                    ))}
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    Need help? Open in full view
                  </div>
                </div>
              )}
            </div>

            {/* Builder header */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
              <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                <span onClick={()=>setSelectedDraft(null)} style={{ cursor:"pointer", color:"#4A3624", fontSize:20 }}>←</span>
                <div>
                  <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:3 }}>Template Builder</h1>
                  <div style={{ fontSize:13, color:"#8A6A4E" }}>Version {selectedDraft.version}</div>
                </div>
              </div>
              {selectedDraft.status!=="Published"&&(
                <div style={{ display:"flex", gap:10 }}>
                  <button onClick={()=>{ const updatedDraft={...selectedDraft,structure:tmplStructure}; const updated={...selectedTemplate,draftVersions:(selectedTemplate.draftVersions||[]).map(dv=>dv.id===selectedDraft.id?updatedDraft:dv)}; setTemplates(prev=>prev.map(t=>t.id===selectedTemplate.id?updated:t)); setSelectedTemplate(updated); setSelectedDraft(updatedDraft); saveTemplateToBackend(updated); alert("Draft saved!"); }} style={{ padding:"10px 20px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#4A3624" }}>Save Draft</button>
                  <button onClick={()=>{ const updatedDraft={...selectedDraft,structure:tmplStructure,status:"Published"}; const updated={...selectedTemplate,status:"Published",version:selectedDraft.version,draftVersions:(selectedTemplate.draftVersions||[]).map(dv=>dv.id===selectedDraft.id?updatedDraft:dv)}; setTemplates(prev=>prev.map(t=>t.id===selectedTemplate.id?updated:t)); setSelectedTemplate(updated); setSelectedDraft(updatedDraft); saveTemplateToBackend(updated); }} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Publish</button>
                </div>
              )}
            </div>

            {/* Published banner */}
            {selectedDraft.status==="Published"&&(
              <div style={{ background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:10, padding:"14px 20px", marginBottom:20, fontSize:14, color:"#8A6A4E" }}>
                This version is published and cannot be edited. Duplicate it from the Versions page to make changes.
              </div>
            )}

            <div style={{ display:"flex", borderBottom:"2px solid #E8D9C0", marginBottom:24 }}>
              {["Structure","Rules & Scope","Profiles"].map(tab=>(
                <button key={tab} onClick={()=>setBuilderTab(tab)} style={{ padding:"12px 20px", background:"none", border:"none", borderBottom:builderTab===tab?"2px solid #111":"2px solid transparent", marginBottom:"-2px", fontSize:14, fontWeight:builderTab===tab?600:400, color:builderTab===tab?"#2E1F12":"#8A6A4E", cursor:"pointer", fontFamily:"inherit" }}>{tab}</button>
              ))}
            </div>
            {builderTab==="Structure"&&(
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16 }}>
                <div style={{ background:"#FDF8ED", borderRadius:12, padding:"20px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                  <h3 style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:14 }}>Question Bank</h3>
                  <input value={qbBuilderSearch} onChange={e=>setQbBuilderSearch(e.target.value)} placeholder="Search questions..." style={{ ...inputStyle, marginBottom:10 }}/>
                  {(()=>{ const shown=questions.filter(q=>!qbBuilderSearch||(q.text||"").toLowerCase().includes(qbBuilderSearch.toLowerCase())); const notAdded=shown.filter(q=>!tmplStructure.some(s2=>s2.id===q.id)); return (
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
                      <span style={{ fontSize:12, color:"#8A6A4E" }}>{shown.length} shown · {notAdded.length} not added</span>
                      <button disabled={notAdded.length===0}
                        onClick={()=>setTmplStructure(prev=>[...prev, ...notAdded])}
                        style={{ padding:"6px 14px", background:notAdded.length===0?"#E8D9C0":P, color:notAdded.length===0?"#B59D7E":"#fff", border:"none", borderRadius:8, fontSize:12, fontWeight:700, cursor:notAdded.length===0?"default":"pointer", fontFamily:"inherit" }}>
                        + Add All{qbBuilderSearch?" (filtered)":""}
                      </button>
                    </div>
                  ); })()}
                  <div style={{ maxHeight:480, overflowY:"auto" }}>
                    {questions.filter(q=>!qbBuilderSearch||(q.text||"").toLowerCase().includes(qbBuilderSearch.toLowerCase())).length===0
                      ?<div style={{ fontSize:13, color:"#B59D7E", textAlign:"center", padding:"24px 0" }}>No questions in bank yet.</div>
                      :questions.filter(q=>!qbBuilderSearch||(q.text||"").toLowerCase().includes(qbBuilderSearch.toLowerCase())).map(q=>{ const added=tmplStructure.some(s=>s.id===q.id); return <div key={q.id} onClick={()=>{ if(!added)setTmplStructure(prev=>[...prev,q]); }} style={{ padding:"10px 12px", marginBottom:6, borderRadius:8, border:`1px solid ${added?"#F0D9BC":"#E8D9C0"}`, fontSize:13, color:"#4A3624", cursor:added?"default":"pointer", background:added?"#FDF3E7":"#fff" }}><div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8 }}><span>{q.text}</span>{added?<span style={{ background:P, color:"#fff", borderRadius:4, padding:"1px 8px", fontSize:11, fontWeight:600, flexShrink:0 }}>Added</span>:<span style={{ color:"#B59D7E", fontSize:18 }}>+</span>}</div><div style={{ fontSize:11, color:"#B59D7E", marginTop:3 }}>{q.category}</div></div>; })
                    }
                  </div>
                </div>
                <div style={{ background:"#FDF8ED", borderRadius:12, padding:"20px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                    <h3 style={{ fontSize:15, fontWeight:700, color:"#2E1F12" }}>Template Structure</h3>
                    {tmplStructure.length>0&&(
                      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                        <span style={{ fontSize:12, color:"#8A6A4E", background:"#F3E7D3", borderRadius:20, padding:"2px 10px" }}>{tmplStructure.length} questions</span>
                        <button onClick={()=>{ if(window.confirm(`Remove all ${tmplStructure.length} questions from this template?`)) setTmplStructure([]); }}
                          style={{ padding:"4px 12px", background:"#FDF8ED", color:"#ef4444", border:"1px solid #fecaca", borderRadius:8, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                          Remove All
                        </button>
                      </div>
                    )}
                  </div>
                  {tmplStructure.length===0?<div style={{ textAlign:"center", padding:"32px 0" }}><div style={{ fontSize:28, marginBottom:10 }}>📋</div><div style={{ fontSize:13, color:"#B59D7E" }}>Click questions from the bank to add them.</div></div>
                    :tmplStructure.map((q,i)=><div key={q.id} style={{ padding:"9px 12px", marginBottom:4, borderRadius:8, border:"1px solid #E8D9C0", fontSize:12, color:"#4A3624", display:"flex", justifyContent:"space-between", alignItems:"center", gap:8 }}><span>{i+1}. {q.text}</span><button onClick={()=>setTmplStructure(prev=>prev.filter(x=>x.id!==q.id))} style={{ background:"none", border:"none", cursor:"pointer", color:"#B59D7E", fontSize:11, fontWeight:600 }}>Remove</button></div>)
                  }
                </div>
                <div style={{ background:"#FDF8ED", borderRadius:12, padding:"20px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                  <h3 style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:14 }}>Question Config</h3>
                  <div style={{ textAlign:"center", padding:"32px 0" }}><div style={{ fontSize:28, marginBottom:10 }}>⚙️</div><div style={{ fontSize:13, color:"#B59D7E" }}>Select a question to configure its settings.</div></div>
                </div>
              </div>
            )}
            {builderTab==="Rules & Scope"&&(
              <div style={{ maxWidth:620 }}>
                <div style={{ background:"#FDF8ED", borderRadius:12, padding:"28px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                  <h3 style={{ fontSize:16, fontWeight:700, color:"#2E1F12", marginBottom:18 }}>Scope Mode</h3>
                  <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                    {[["Standard","All questions presented in order."],["Spot-Check","Random subset selected at session start."],["Risk-Based","Full list shown, prioritises high-risk items."]].map(([opt,desc])=>(
                      <div key={opt} onClick={()=>setScopeMode(opt)} style={{ padding:"14px 16px", borderRadius:10, border:`2px solid ${scopeMode===opt?P:"#E8D9C0"}`, cursor:"pointer", display:"flex", alignItems:"center", gap:12, background:scopeMode===opt?"#F9E3CD":"#fff" }}>
                        <div style={{ width:20, height:20, borderRadius:"50%", border:scopeMode===opt?`6px solid ${P}`:"2px solid #DECBAB", flexShrink:0 }}/>
                        <div><div style={{ fontWeight:600, color:"#2E1F12", fontSize:14 }}>{opt}</div><div style={{ fontSize:12, color:"#B59D7E", marginTop:2 }}>{desc}</div></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {builderTab==="Profiles"&&(
              <div>
                {/* Top row: Scoring + AI */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
                  {[
                    { key:"scoring", label:"Scoring Profile", desc:"Defines how answers are scored and what thresholds determine pass/conditional/fail outcomes", val:scoringProfile, setVal:setScoringProfile, page:"scoring", options:scoringProfiles },
                    { key:"ai", label:"AI Profile", desc:"Configures AI model, confidence thresholds, and how AI findings are routed for review", val:aiProfile, setVal:setAiProfile, page:"aiprofiles", options:aiProfiles },
                  ].map(({key,label,desc,val,setVal,page,options})=>(
                    <div key={key} style={{ background:"#FDF8ED", borderRadius:12, padding:"24px 26px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)", border:"1px solid #f3f4f6" }}>
                      {/* Title + info icon */}
                      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                        <span style={{ fontSize:15, fontWeight:700, color:"#2E1F12" }}>{label}</span>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <p style={{ fontSize:13, color:"#8A6A4E", marginBottom:16, lineHeight:1.6 }}>{desc}</p>
                      {/* Real dropdown */}
                      <div style={{ marginBottom:16 }}>
                        <select value={val||""} onChange={e=>setVal(e.target.value)} style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, color:val?"#2E1F12":"#B59D7E", background:"#FDF8ED", cursor:"pointer", fontFamily:"inherit", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", paddingRight:36 }}>
                          <option value="">Select...</option>
                          {(options||[]).map(p=><option key={p.id} value={p.name}>{p.name}</option>)}
                        </select>
                      </div>
                      {/* View / Edit Profile link */}
                      <button onClick={()=>setActivePage(page)} style={{ display:"flex", alignItems:"center", gap:7, background:"none", border:"none", cursor:"pointer", fontSize:13, color:"#4A3624", fontFamily:"inherit", padding:0, fontWeight:500 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        View / Edit Profile
                      </button>
                    </div>
                  ))}
                </div>
                {/* Bottom row: Report Profile (left half only) */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                  <div style={{ background:"#FDF8ED", borderRadius:12, padding:"24px 26px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)", border:"1px solid #f3f4f6" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                      <span style={{ fontSize:15, fontWeight:700, color:"#2E1F12" }}>Report Profile</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    </div>
                    <p style={{ fontSize:13, color:"#8A6A4E", marginBottom:16, lineHeight:1.6 }}>Controls report format, branding, section order, and finding wording style</p>
                    <div style={{ marginBottom:16 }}>
                      <select value={reportProfile||""} onChange={e=>setReportProfile(e.target.value)} style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, color:reportProfile?"#2E1F12":"#B59D7E", background:"#FDF8ED", cursor:"pointer", fontFamily:"inherit", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", paddingRight:36 }}>
                        <option value="">Select...</option>
                        {(reportProfiles||[]).map(p=><option key={p.id} value={p.name}>{p.name}</option>)}
                      </select>
                    </div>
                    <button onClick={()=>setActivePage("reportprofiles")} style={{ display:"flex", alignItems:"center", gap:7, background:"none", border:"none", cursor:"pointer", fontSize:13, color:"#4A3624", fontFamily:"inherit", padding:0, fontWeight:500 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      View / Edit Profile
                    </button>
                  </div>
                  <div/>{/* empty right cell */}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* RANDOMNESS */}
      {activePage==="randomness"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>{ setUserMenuOpen(false); setRandMenuOpen(null); }}>
          <TopBar/>
          <div style={{ padding:"28px" }}>

            {/* HOW TO USE */}
            <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <button onClick={()=>setShowHowToRand(!showHowToRand)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  How to use
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowToRand?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
              </button>
              {showHowToRand&&(
                <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>

                  {/* What this profile controls */}
                  <div style={{ marginTop:20, marginBottom:20 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>What this profile controls</p>
                    </div>
                    <p style={{ fontSize:14, color:"#4A3624", marginBottom:10, lineHeight:1.7 }}>Controls how the system selects or prioritises questions when using Spot-Check or Risk-Based inspections.</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {[["Spot-Check","selects a fixed subset of questions at the start."],["Risk-Based",'keeps the full checklist visible but highlights "Suggested Next" questions first.']].map(([k,v],i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:6, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> — {v}</li>
                      ))}
                    </ul>
                  </div>

                  {/* When to create a new profile */}
                  <div style={{ marginBottom:20 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>When to create a new profile</p>
                    </div>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {["Different inspection lengths (quick vs standard vs deep).","Stronger focus on critical or major items.","Stronger anti-repeat to avoid checking the same questions each visit.","Automatic follow-up checks when something fails."].map((t,i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:6, lineHeight:1.6 }}>{t}</li>
                      ))}
                    </ul>
                  </div>

                  {/* What the settings mean */}
                  <div style={{ marginBottom:20 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>What the settings mean</p>
                    </div>
                    {/* Coverage */}
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:6 }}>Coverage requirements</p>
                    <ul style={{ margin:"0 0 14px", paddingLeft:20 }}>
                      {[["Min per category","(Bridge / Engine Room / Deck) — ensures balanced coverage."],["Min per sub-area","— prevents over-focusing on one section."],["Must-include policy","— ensures mandatory compliance items are never skipped."]].map(([k,v],i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> {v}</li>
                      ))}
                    </ul>
                    {/* Weighting */}
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:6 }}>Weighting rules</p>
                    <ul style={{ margin:"0 0 14px", paddingLeft:20 }}>
                      {[["Base weight source","— template weights vs severity-only vs equal weights."],["Severity multipliers","— higher severity gets picked more often."],["Evidence boost","— increases the chance of items requiring photos/videos."],["Vessel risk boosts","— optional boost based on vessel risk factors."]].map(([k,v],i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> {v}</li>
                      ))}
                    </ul>
                    {/* Anti-repeat */}
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:4 }}>Anti-repeat window</p>
                    <p style={{ fontSize:14, color:"#4A3624", marginBottom:14, lineHeight:1.6 }}>Enabled toggle, scope (vessel / fleet), window size (last N inspections), penalty strength.</p>
                    {/* Follow-up */}
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:4 }}>Follow-up rules</p>
                    <p style={{ fontSize:14, color:"#4A3624", marginBottom:0, lineHeight:1.6 }}>Add extra checks automatically when a specific question fails or a sub-area has any fail.</p>
                  </div>

                  {/* Example Presets */}
                  <div style={{ marginBottom:20 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>Example Presets</p>
                    </div>
                    {[["Quick Spot-Check (1–2 hours):","Lower min per category, anti-repeat ON, follow-ups only for critical."],["Standard Spot-Check (half day):","Higher minimums, anti-repeat ON, follow-ups for critical + major."],["Risk-Based (full checklist):","Full checklist visible, but suggested-next prioritises critical/major and adds follow-ups."]].map(([k,v],i)=>(
                      <p key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:8, lineHeight:1.6 }}><strong>{k}</strong> {v}</p>
                    ))}
                  </div>

                  {/* Best Practice */}
                  <div style={{ marginBottom:16 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>Best Practice</p>
                    </div>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {["Run Test/Preview with a template before using it in production.","Keep anti-repeat scope per vessel unless you have a fleet-wide program.","Start conservative with follow-ups to avoid overwhelming inspectors."].map((t,i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    Need help? Open in full view
                  </div>
                </div>
              )}
            </div>

            {/* Title + Search + Add */}
            <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Randomness Profiles</h1>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Configure selection logic for spot-check and risk-based inspections</p>
            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:16 }}>
              <div style={{ flex:1, maxWidth:480, display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:10 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input value={randSearch} onChange={e=>setRandSearch(e.target.value)} placeholder="Search..." style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
              </div>
              <button onClick={e=>{ e.stopPropagation(); setShowAddProfile(true); setRandStep(1); }} style={{ display:"flex", alignItems:"center", gap:8, background:P, color:"#fff", border:"none", borderRadius:8, padding:"10px 22px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>+ Add Profile</button>
            </div>

          <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
              <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["PROFILE NAME","APPLIES TO","STATUS",""].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:600, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
              <tbody>
                {randomnessProfiles.length===0?<tr><td colSpan={4}><EmptyState msg="No randomness profiles yet."/></td></tr>:randomnessProfiles.map(p=>(
                  <tr key={p.id} style={{ borderBottom:"1px solid #f9fafb" }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                    <td style={{ padding:"14px 16px", fontWeight:600, color:"#2E1F12" }}>{p.name}</td>
                    <td style={{ padding:"14px 16px", color:"#4A3624" }}>{p.appliesTo}</td>
                    <td style={{ padding:"14px 16px" }}><span style={{ background:P, color:"#fff", borderRadius:20, padding:"4px 14px", fontSize:12, fontWeight:600 }}>active</span></td>
                    <td style={{ padding:"14px 16px", textAlign:"right" }} onClick={e=>e.stopPropagation()}>
                      <button onClick={e=>{ e.stopPropagation(); setRandMenuOpen(randMenuOpen===p.id?null:p.id); }} style={{ background:"none", border:"none", cursor:"pointer", color:"#B59D7E", fontSize:18, fontWeight:700 }}>•••</button>
                      {randMenuOpen===p.id&&<div style={{ position:"absolute", right:20, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 24px rgba(0,0,0,0.15)", zIndex:999, minWidth:140 }}>
                        <div onClick={()=>{ fetch(`${API}/api/admin/profiles/${p.id}`,{method:"DELETE",headers:authHeader()}).catch(()=>{}); setRandomnessProfiles(prev=>prev.filter(x=>x.id!==p.id)); setRandMenuOpen(null); }} style={{ padding:"11px 18px", fontSize:14, color:"#ef4444", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#fef2f2"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Delete</div>
                      </div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showAddProfile&&(
            <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <div style={{ background:"#FDF8ED", borderRadius:16, padding:"28px 32px", width:"100%", maxWidth:560, boxShadow:"0 20px 60px rgba(0,0,0,0.3)", position:"relative" }} onClick={e=>e.stopPropagation()}>
                <button onClick={()=>setShowAddProfile(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
                <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>New Randomness Profile</h3>
                <div style={{ display:"flex", gap:6, marginBottom:20 }}>
                  {["Basics","Coverage","Weighting","Anti-Repeat","Follow-Ups","Test & Preview"].map((s,i)=>(
                    <button key={s} onClick={()=>setRandStep(i+1)} style={{ display:"flex", alignItems:"center", gap:6, padding:"7px 14px", borderRadius:20, border:"none", cursor:"pointer", fontFamily:"inherit", fontSize:12, fontWeight:600, background:randStep===i+1?P:"#F3E7D3", color:randStep===i+1?"#fff":"#8A6A4E" }}>
                      <span style={{ width:18, height:18, borderRadius:"50%", background:randStep===i+1?"rgba(255,255,255,0.25)":"#E8D9C0", display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:randStep===i+1?"#fff":"#8A6A4E" }}>{i+1}</span>
                      {s}
                    </button>
                  ))}
                </div>
                {randStep===1&&(
                  <div>
                    {/* Profile Name */}
                    <div style={{ marginBottom:20 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Profile Name <span style={{ color:"#ef4444" }}>*</span></label>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <input value={randProfile.name} onChange={e=>setRandProfile({...randProfile,name:e.target.value})} placeholder="e.g. High Entropy Spot-Check" style={inputStyle}/>
                    </div>
                    {/* Description */}
                    <div style={{ marginBottom:20 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Description</label>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <textarea value={randProfile.description} onChange={e=>setRandProfile({...randProfile,description:e.target.value})} placeholder="Describe the purpose of this profile..." rows={4} style={{ ...inputStyle, resize:"vertical", lineHeight:1.6 }}/>
                    </div>
                    {/* Applies To */}
                    <div style={{ marginBottom:20 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Applies To</label>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <select value={randProfile.appliesTo} onChange={e=>setRandProfile({...randProfile,appliesTo:e.target.value})}
                        style={{ ...inputStyle, appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                        <option>All Vessel Types</option>
                        <option>Tankers Only</option>
                        <option>Bulk Carriers</option>
                        <option>Container Ships</option>
                        <option>Passenger Ships</option>
                      </select>
                    </div>
                    {/* Selection Timing */}
                    <div style={{ marginBottom:8 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Selection Timing</label>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <select value={randProfile.selectionTiming} onChange={e=>setRandProfile({...randProfile,selectionTiming:e.target.value})}
                        style={{ ...inputStyle, appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                        <option>On Inspection Start</option>
                        <option>On Section Enter</option>
                        <option>Pre-Generated (before assignment)</option>
                      </select>
                    </div>
                  </div>
                )}
                {randStep===2&&(
                  <div style={{ background:"#F7EFE0", borderRadius:10, padding:"24px" }}>
                    <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:20 }}>Coverage Requirements</p>

                    {/* Min per Category */}
                    <div style={{ marginBottom:24 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:12 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Minimum Questions per Category</label>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                        <input type="range" min="1" max="20" value={randProfile.minPerCategory||2} onChange={e=>setRandProfile({...randProfile,minPerCategory:Number(e.target.value)})}
                          style={{ flex:1, accentColor:P, height:4, cursor:"pointer" }}/>
                        <span style={{ fontSize:14, fontWeight:700, color:"#2E1F12", minWidth:24, textAlign:"right" }}>{randProfile.minPerCategory||2}</span>
                      </div>
                    </div>

                    {/* Min per Sub-Area */}
                    <div style={{ marginBottom:24 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:12 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Minimum Questions per Sub-Area</label>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                        <input type="range" min="1" max="20" value={randProfile.minPerSubArea||1} onChange={e=>setRandProfile({...randProfile,minPerSubArea:Number(e.target.value)})}
                          style={{ flex:1, accentColor:P, height:4, cursor:"pointer" }}/>
                        <span style={{ fontSize:14, fontWeight:700, color:"#2E1F12", minWidth:24, textAlign:"right" }}>{randProfile.minPerSubArea||1}</span>
                      </div>
                    </div>

                    {/* Must-Include Handling */}
                    <div>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:10 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Must-Include Handling</label>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <select value={randProfile.mustInclude||"Always Include (guaranteed)"} onChange={e=>setRandProfile({...randProfile,mustInclude:e.target.value})}
                        style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                        <option>Always Include (guaranteed)</option>
                        <option>High Priority (weighted heavily)</option>
                        <option>Standard (treated normally)</option>
                      </select>
                    </div>
                  </div>
                )}
                {randStep===3&&(
                  <div style={{ background:"#F7EFE0", borderRadius:10, padding:"24px" }}>
                    <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:20 }}>Weighting Rules</p>

                    {/* Base Weight Source */}
                    <div style={{ marginBottom:24 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:10 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Base Weight Source</label>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <select value={randProfile.baseWeightSource||"Question Weight (from template)"} onChange={e=>setRandProfile({...randProfile,baseWeightSource:e.target.value})}
                        style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                        <option>Question Weight (from template)</option>
                        <option>Equal Weight (uniform distribution)</option>
                        <option>Severity-Based</option>
                        <option>Historical Fail Rate</option>
                      </select>
                    </div>

                    {/* Severity Multiplier */}
                    <div style={{ marginBottom:24 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:12 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Severity Multiplier: {(randProfile.severityMultiplier||1.5).toFixed(1)}x</label>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <input type="range" min="1" max="5" step="0.1" value={randProfile.severityMultiplier||1.5} onChange={e=>setRandProfile({...randProfile,severityMultiplier:Number(e.target.value)})}
                        style={{ width:"100%", accentColor:P, height:4, cursor:"pointer" }}/>
                    </div>

                    {/* Evidence Boost */}
                    <div style={{ marginBottom:24 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:12 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Evidence Boost: +{randProfile.evidenceBoost||20}%</label>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <input type="range" min="0" max="100" value={randProfile.evidenceBoost||20} onChange={e=>setRandProfile({...randProfile,evidenceBoost:Number(e.target.value)})}
                        style={{ width:"100%", accentColor:P, height:4, cursor:"pointer" }}/>
                    </div>

                    {/* Vessel Risk Boost */}
                    <div>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:12 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Vessel Risk Boost: +{randProfile.vesselRiskBoost||30}%</label>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <input type="range" min="0" max="100" value={randProfile.vesselRiskBoost||30} onChange={e=>setRandProfile({...randProfile,vesselRiskBoost:Number(e.target.value)})}
                        style={{ width:"100%", accentColor:P, height:4, cursor:"pointer" }}/>
                    </div>
                  </div>
                )}
                {randStep===4&&(
                  <div style={{ background:"#F7EFE0", borderRadius:10, padding:"24px" }}>

                    {/* Toggle header */}
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
                      <div>
                        <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:4 }}>Anti-Repeat Rules</p>
                        <p style={{ fontSize:13, color:"#8A6A4E" }}>Prevent the same questions from being selected in consecutive inspections</p>
                      </div>
                      <div onClick={()=>setRandProfile({...randProfile,antiRepeat:!randProfile.antiRepeat})}
                        style={{ width:48, height:26, borderRadius:13, background:randProfile.antiRepeat!==false?P:"#DECBAB", cursor:"pointer", position:"relative", flexShrink:0, transition:"background 0.2s" }}>
                        <div style={{ width:20, height:20, borderRadius:"50%", background:"#FDF8ED", position:"absolute", top:3, left:randProfile.antiRepeat!==false?25:3, transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}/>
                      </div>
                    </div>

                    {/* Scope, Window Size, Penalty — only when toggle is ON */}
                    {randProfile.antiRepeat!==false&&(<>
                      <div style={{ marginBottom:24 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:10 }}>
                          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Scope</label>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        </div>
                        <select value={randProfile.antiRepeatScope||"Per Vessel"} onChange={e=>setRandProfile({...randProfile,antiRepeatScope:e.target.value})}
                          style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                          <option>Per Vessel</option>
                          <option>Across Fleet</option>
                        </select>
                      </div>
                      <div style={{ marginBottom:24 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:12 }}>
                          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Window Size (inspections)</label>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        </div>
                        <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                          <input type="range" min="1" max="20" value={randProfile.windowSize||3} onChange={e=>setRandProfile({...randProfile,windowSize:Number(e.target.value)})}
                            style={{ flex:1, accentColor:P, height:4, cursor:"pointer" }}/>
                          <span style={{ fontSize:14, fontWeight:700, color:"#2E1F12", minWidth:24, textAlign:"right" }}>{randProfile.windowSize||3}</span>
                        </div>
                      </div>
                      <div>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:12 }}>
                          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Penalty Strength: {randProfile.penaltyStrength||50}%</label>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        </div>
                        <input type="range" min="0" max="100" value={randProfile.penaltyStrength||50} onChange={e=>setRandProfile({...randProfile,penaltyStrength:Number(e.target.value)})}
                          style={{ width:"100%", accentColor:P, height:4, cursor:"pointer" }}/>
                      </div>
                    </>)}
                  </div>
                )}
                {randStep===5&&(
                  <div style={{ background:"#F7EFE0", borderRadius:10, padding:"24px" }}>
                    {/* Master toggle */}
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
                      <div>
                        <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:4 }}>Follow-Up Insertion Rules</p>
                        <p style={{ fontSize:13, color:"#8A6A4E", margin:0 }}>Automatically add follow-up questions when certain conditions are met</p>
                      </div>
                      <div onClick={()=>setRandProfile({...randProfile,followUps:!randProfile.followUps})}
                        style={{ width:48, height:26, borderRadius:13, background:randProfile.followUps?P:"#DECBAB", cursor:"pointer", position:"relative", flexShrink:0, transition:"background 0.2s" }}>
                        <div style={{ width:20, height:20, borderRadius:"50%", background:"#FDF8ED", position:"absolute", top:3, left:randProfile.followUps?25:3, transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}/>
                      </div>
                    </div>

                    {/* Rule cards — only when master toggle is ON */}
                    {randProfile.followUps&&(<>
                      {[
                        { key:"anyFail", label:"Any Fail answer", desc:"Add related questions from same category", defaultOn:true },
                        { key:"criticalFail", label:"Critical severity fail", desc:"Add all must-include questions", defaultOn:true },
                        { key:"evidenceMissing", label:"Evidence missing", desc:"Add evidence-required follow-up", defaultOn:false },
                      ].map(({key,label,desc,defaultOn})=>{
                        const val = randProfile.followUpRules?.[key] ?? defaultOn;
                        return (
                          <div key={key} style={{ background:"#FDF8ED", borderRadius:10, padding:"16px 18px", marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"center", border:"1px solid #f3f4f6" }}>
                            <div>
                              <div style={{ fontSize:14, fontWeight:600, color:"#2E1F12", marginBottom:3 }}>{label}</div>
                              <div style={{ fontSize:12, color:"#8A6A4E" }}>{desc}</div>
                            </div>
                            <div onClick={()=>setRandProfile(prev=>({...prev, followUpRules:{...(prev.followUpRules||{}), [key]:!val}}))}
                              style={{ width:48, height:26, borderRadius:13, background:val?P:"#DECBAB", cursor:"pointer", position:"relative", flexShrink:0, transition:"background 0.2s" }}>
                              <div style={{ width:20, height:20, borderRadius:"50%", background:"#FDF8ED", position:"absolute", top:3, left:val?25:3, transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}/>
                            </div>
                          </div>
                        );
                      })}
                      <button style={{ display:"flex", alignItems:"center", gap:8, background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"10px 18px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#4A3624", marginTop:6 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                        Add Follow-Up Rule
                      </button>
                    </>)}
                  </div>
                )}
                {randStep===6&&(
                  <div style={{ background:"#F7EFE0", borderRadius:10, padding:"24px" }}>
                    <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:20 }}>Simulation</p>

                    {/* Template Version */}
                    <div style={{ marginBottom:16 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:10 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Template Version</label>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <select value={randProfile.simTemplate||""} onChange={e=>setRandProfile({...randProfile,simTemplate:e.target.value,simResults:null})}
                        style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer", border:`2px solid ${P}` }}>
                        <option value="">Select template version...</option>
                        <option>PSC Checklist v2.1</option>
                        <option>SIRE 2.0 v1.3</option>
                        <option>Internal Audit v4.0</option>
                      </select>
                    </div>

                    {/* Vessel optional */}
                    <div style={{ marginBottom:20 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:10 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Vessel (optional)</label>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      </div>
                      <select value={randProfile.simVessel||""} onChange={e=>setRandProfile({...randProfile,simVessel:e.target.value,simResults:null})}
                        style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                        <option value="">Any vessel...</option>
                        <option>MV Pacific Star</option>
                        <option>MT Atlantic Dawn</option>
                      </select>
                    </div>

                    {/* Run Simulation button */}
                    <button onClick={()=>setRandProfile({...randProfile, simResults:{questionsSelected:24,categoriesCovered:6,mustIncludes:3,breakdown:[{label:"Bridge → Navigation Equipment",count:4},{label:"Engine Room → Main Engine",count:5},{label:"Deck → Cargo Gear",count:3}]}})}
                      style={{ width:"100%", padding:"13px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:16 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                      Run Simulation
                    </button>

                    {/* Simulation Results */}
                    {randProfile.simResults&&(
                      <div style={{ background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, padding:"20px" }}>
                        <p style={{ fontSize:14, fontWeight:700, color:"#4A3624", marginBottom:14 }}>Simulation Results</p>
                        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10, marginBottom:16 }}>
                          {[["Questions Selected", randProfile.simResults.questionsSelected],["Categories Covered", randProfile.simResults.categoriesCovered],["Must-Includes", randProfile.simResults.mustIncludes]].map(([label,val])=>(
                            <div key={label} style={{ background:"#F7EFE0", borderRadius:8, padding:"14px", textAlign:"center" }}>
                              <div style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>{val}</div>
                              <div style={{ fontSize:12, color:"#8A6A4E" }}>{label}</div>
                            </div>
                          ))}
                        </div>
                        {randProfile.simResults.breakdown.map((b,i)=>(
                          <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 0", borderTop: i===0?"none":"1px solid #f3f4f6" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                            <span style={{ fontSize:14, color:"#4A3624" }}>{b.label} <strong>({b.count} questions)</strong></span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:24, paddingTop:16, borderTop:"1px solid #f3f4f6" }}>
                  <button onClick={()=>setRandProfile({name:"",description:"",appliesTo:"All Vessel Types",selectionTiming:"On Inspection Start"})} style={{ display:"flex", alignItems:"center", gap:6, background:"none", border:"none", cursor:"pointer", fontSize:13, color:"#8A6A4E", fontFamily:"inherit" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.48"/></svg>
                    Reset to defaults
                  </button>
                  <div style={{ display:"flex", gap:10 }}>
                    {randStep>1&&<button onClick={()=>setRandStep(randStep-1)} style={{ display:"flex", alignItems:"center", gap:6, padding:"9px 20px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#4A3624" }}>‹ Back</button>}
                    {randStep<6
                      ?<button onClick={()=>setRandStep(randStep+1)} style={{ display:"flex", alignItems:"center", gap:6, padding:"9px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Next ›</button>
                      :<button onClick={async()=>{ if(!randProfile.name)return; try{ const r=await fetch(`${API}/api/admin/profiles`,{method:"POST",headers:authHeader(),body:JSON.stringify({kind:"randomness",name:randProfile.name,data:{appliesTo:randProfile.appliesTo,selectionTiming:randProfile.selectionTiming}})}); const d=await r.json(); if(d.success){ setRandomnessProfiles(prev=>[...prev,{id:d.data.id,name:randProfile.name,appliesTo:randProfile.appliesTo,selectionTiming:randProfile.selectionTiming}]); setShowAddProfile(false); setRandProfile({name:"",description:"",appliesTo:"All Vessel Types",selectionTiming:"On Inspection Start"});} }catch(e){alert("Error");} }} style={{ display:"flex", alignItems:"center", gap:7, padding:"9px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        Save Profile
                      </button>
                    }
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      )}
      {activePage==="settings"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>setUserMenuOpen(false)}>
          <TopBar/>
          <div style={{ padding:"28px" }}>
            <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Settings</h1>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:24 }}>Organization and system configuration</p>

            {/* Organization Profile */}
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"28px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)", marginBottom:16 }}>
              <p style={{ fontSize:16, fontWeight:700, color:"#2E1F12", marginBottom:24 }}>Organization Profile</p>
              <div style={{ marginBottom:20 }}>
                <label style={{ fontSize:14, color:"#4A3624", display:"block", marginBottom:8 }}>Organization Name</label>
                <input value={settingsOrg.name} onChange={e=>setSettingsOrg({...settingsOrg,name:e.target.value})} placeholder="Your Company" style={{ ...inputStyle, color:"#B59D7E" }}/>
              </div>
              <div style={{ marginBottom:20 }}>
                <label style={{ fontSize:14, color:"#4A3624", display:"block", marginBottom:8 }}>Logo URL</label>
                <input value={settingsOrg.logoUrl} onChange={e=>setSettingsOrg({...settingsOrg,logoUrl:e.target.value})} placeholder="https://..." style={{ ...inputStyle, color:"#B59D7E" }}/>
              </div>
              <div>
                <label style={{ fontSize:14, color:"#4A3624", display:"block", marginBottom:8 }}>Contact Email</label>
                <input value={settingsOrg.contactEmail} onChange={e=>setSettingsOrg({...settingsOrg,contactEmail:e.target.value})} placeholder="admin@company.com" style={{ ...inputStyle, color:"#B59D7E" }}/>
              </div>
            </div>

            {/* Default Profiles */}
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"28px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)", marginBottom:16 }}>
              <p style={{ fontSize:16, fontWeight:700, color:"#2E1F12", marginBottom:24 }}>Default Profiles</p>
              {[
                {label:"Randomness Profile", key:"randomness", opts:["None",...(randomnessProfiles||[]).map(p=>p.name)]},
                {label:"Scoring Profile", key:"scoring", opts:["None",...(scoringProfiles||[]).map(p=>p.name)]},
                {label:"AI Profile", key:"ai", opts:["None",...(aiProfiles||[]).map(p=>p.name)]},
                {label:"Report Profile", key:"report", opts:["None",...(reportProfiles||[]).map(p=>p.name)]},
              ].map(({label,key,opts})=>(
                <div key={key} style={{ marginBottom:20 }}>
                  <label style={{ fontSize:14, color:"#4A3624", display:"block", marginBottom:8 }}>{label}</label>
                  <select value={settingsDefaultProfiles[key]} onChange={e=>setSettingsDefaultProfiles({...settingsDefaultProfiles,[key]:e.target.value})}
                    style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", paddingRight:36, cursor:"pointer" }}>
                    {opts.map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>

            {/* Notifications */}
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"28px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)", marginBottom:16 }}>
              <p style={{ fontSize:16, fontWeight:700, color:"#2E1F12", marginBottom:24 }}>Notifications</p>
              {[
                {label:"Email on inspection submission", key:"emailSubmission"},
                {label:"Email on report ready", key:"emailReady"},
                {label:"Email on overdue CAPA", key:"emailOverdue"},
                {label:"Slack integration", key:"slack"},
              ].map(({label,key})=>(
                <div key={key} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"14px 0", borderBottom:"1px solid #f3f4f6" }}>
                  <span style={{ fontSize:14, color:"#4A3624" }}>{label}</span>
                  <div onClick={()=>setSettingsNotifications(p=>({...p,[key]:!p[key]}))} style={{ width:48, height:26, borderRadius:13, background:settingsNotifications[key]?P:"#DECBAB", cursor:"pointer", position:"relative", transition:"background 0.2s" }}>
                    <div style={{ width:20, height:20, borderRadius:"50%", background:"#FDF8ED", position:"absolute", top:3, left:settingsNotifications[key]?25:3, transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}/>
                  </div>
                </div>
              ))}
            </div>

            {/* Dev: Wipe Data */}
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"28px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)", marginBottom:24 }}>
              <p style={{ fontSize:16, fontWeight:700, color:"#2E1F12", marginBottom:6 }}>Dev: Wipe Data</p>
              <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Remove all test data and reset IDs. Auth (users, sessions) is preserved. Only available on dev.</p>
              <button style={{ display:"flex", alignItems:"center", gap:8, background:"#ef4444", color:"#fff", border:"none", borderRadius:8, padding:"11px 20px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                Wipe Dev Data
              </button>
            </div>

            {/* Save */}
            <button onClick={()=>{
              fetch(`${API}/api/settings/general`,{method:"PUT",headers:authHeader(),body:JSON.stringify({org:settingsOrg,defaultProfiles:settingsDefaultProfiles,notifications:settingsNotifications})}).then(r=>r.json()).then(d=>{
                if(d.success) alert("Settings saved successfully!");
                else alert("Failed to save settings");
              }).catch(()=>alert("Error saving settings"));
            }} style={{ background:P, color:"#fff", border:"none", borderRadius:8, padding:"12px 28px", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>Save Settings</button>  
              </div>
        </div>
      )}
      
      {/* USERS */}
      {activePage==="users"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>{ setUserMenuOpen(false); setUsersMenuOpen(null); }}>
          <TopBar/>
          <div style={{ padding:"28px" }}>
            <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Users</h1>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:24 }}>Team and inspector management</p>

            {/* Tabs */}
            <div style={{ display:"flex", gap:4, marginBottom:20 }}>
              {["Admins","Inspectors"].map(tab=>(
                <button key={tab} onClick={()=>{ setUsersTab(tab); setUsersSearch(""); setUsersMenuOpen(null); }}
                  style={{ padding:"8px 20px", borderRadius:8, border:"none", cursor:"pointer", fontFamily:"inherit", fontSize:14, fontWeight:usersTab===tab?700:400, background:usersTab===tab?"#fff":"transparent", color:usersTab===tab?"#2E1F12":"#8A6A4E", boxShadow:usersTab===tab?"0 1px 4px rgba(0,0,0,0.08)":"none" }}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Search + Add button */}
            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:16 }}>
              <div style={{ maxWidth:440, display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:10 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input value={usersSearch} onChange={e=>setUsersSearch(e.target.value)} placeholder="Search..." style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
              </div>
              {usersTab==="Inspectors"&&(
                <button onClick={()=>setShowAddInspector(true)} style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:8, background:P, color:"#fff", border:"none", borderRadius:8, padding:"10px 22px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>+ Add Inspector</button>
              )}
            </div>

            {/* Table */}
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"visible" }}>
              {usersTab==="Admins"&&(
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                  <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["NAME","EMAIL","ROLE","STATUS","LAST ACTIVE",""].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:700, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
                  <tbody>
                    {admins.filter(u=>!usersSearch||u.name.toLowerCase().includes(usersSearch.toLowerCase())||u.email.toLowerCase().includes(usersSearch.toLowerCase())).map(u=>(
                      <tr key={u.id} style={{ borderBottom:"1px solid #f9fafb" }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                        <td style={{ padding:"14px 16px", fontWeight:600, color:"#2E1F12" }}>{u.name}</td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{u.email}</td>
                        <td style={{ padding:"14px 16px" }}><span style={{ background:"#F3E7D3", color:"#4A3624", borderRadius:20, padding:"3px 12px", fontSize:12, fontWeight:500, border:"1px solid #E8D9C0" }}>{u.role}</span></td>
                        <td style={{ padding:"14px 16px" }}><span style={{ background:P, color:"#fff", borderRadius:20, padding:"4px 14px", fontSize:12, fontWeight:600 }}>{u.status}</span></td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{u.lastActive}</td>
                        <td style={{ padding:"14px 16px", textAlign:"right" }}>
                          <button style={{ background:"none", border:"1px solid #E8D9C0", borderRadius:7, cursor:"pointer", color:"#8A6A4E", fontSize:14, fontWeight:700, letterSpacing:"2px", padding:"3px 8px" }}>•••</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {usersTab==="Inspectors"&&(
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                  <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["NAME","EMAIL","STATUS","LAST ACTIVE",""].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:700, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
                  <tbody>
                    {inspectors.filter(u=>!usersSearch||u.name.toLowerCase().includes(usersSearch.toLowerCase())||u.email.toLowerCase().includes(usersSearch.toLowerCase())).map(u=>(
                      <tr key={u.id} style={{ borderBottom:"1px solid #f9fafb", position:"relative" }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                        <td style={{ padding:"14px 16px", fontWeight:600, color:"#2E1F12" }}>{u.name}</td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{u.email}</td>
                        <td style={{ padding:"14px 16px" }}><span style={{ background:P, color:"#fff", borderRadius:20, padding:"4px 14px", fontSize:12, fontWeight:600 }}>{u.status}</span></td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{u.lastActive}</td>
                        <td style={{ padding:"14px 16px", textAlign:"right", position:"relative" }} onClick={e=>e.stopPropagation()}>
                          <button onClick={e=>{ e.stopPropagation(); setUsersMenuOpen(usersMenuOpen===u.id?null:u.id); }}
                            style={{ background:"none", border:"1px solid #E8D9C0", borderRadius:7, cursor:"pointer", color:"#8A6A4E", fontSize:14, fontWeight:700, letterSpacing:"2px", padding:"3px 8px" }}>•••</button>
                          {usersMenuOpen===u.id&&(
                            <div style={{ position:"absolute", right:8, top:44, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 28px rgba(0,0,0,0.15)", zIndex:999, minWidth:150, overflow:"hidden" }} onClick={e=>e.stopPropagation()}>
                              <div style={{ padding:"11px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Edit name</div>
                              <div style={{ padding:"11px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Change status</div>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div style={{ padding:"10px 16px", fontSize:13, color:"#8A6A4E", borderTop:"1px solid #f3f4f6" }}>
                Showing 1–{usersTab==="Admins"?admins.length:inspectors.length} of {usersTab==="Admins"?admins.length:inspectors.length}
              </div>
            </div>
          </div>

          {/* ADD INSPECTOR MODAL */}
          {showAddInspector&&(
            <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <div style={{ background:"#FDF8ED", borderRadius:16, width:"100%", maxWidth:480, boxShadow:"0 24px 64px rgba(0,0,0,0.3)" }} onClick={e=>e.stopPropagation()}>
                <div style={{ padding:"24px 28px 18px", borderBottom:"1px solid #f3f4f6", position:"relative" }}>
                  <button onClick={()=>setShowAddInspector(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
                  <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Add Inspector</h3>
                  <p style={{ fontSize:14, color:"#8A6A4E", margin:0 }}>Invite a new inspector to the platform</p>
                </div>
                <div style={{ padding:"20px 28px" }}>
                  <div style={{ marginBottom:16 }}>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Name <span style={{ color:"#ef4444" }}>*</span></label>
                    <input value={newInspector.name} onChange={e=>setNewInspector({...newInspector,name:e.target.value})} placeholder="e.g. John Smith" style={inputStyle}/>
                  </div>
                  <div>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Email <span style={{ color:"#ef4444" }}>*</span></label>
                    <input value={newInspector.email} onChange={e=>setNewInspector({...newInspector,email:e.target.value})} placeholder="e.g. john@company.com" style={inputStyle}/>
                  </div>
                  <div style={{ marginTop:16 }}>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Password <span style={{ color:"#ef4444" }}>*</span></label>
                    <input value={newInspector.password||""} onChange={e=>setNewInspector({...newInspector,password:e.target.value})} placeholder="Set a password" type="password" style={inputStyle}/>
                  </div>
                </div>
                <div style={{ padding:"16px 28px", borderTop:"1px solid #f3f4f6", display:"flex", gap:10, justifyContent:"flex-end" }}>
                  <button onClick={()=>setShowAddInspector(false)} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
                  <button onClick={async()=>{ if(!newInspector.name||!newInspector.email||!newInspector.password)return; try{ const r=await fetch(`${API}/api/auth/inspectors`,{method:"POST",headers:authHeader(),body:JSON.stringify({name:newInspector.name,email:newInspector.email,password:newInspector.password})}); const d=await r.json(); if(d.success){setInspectors(prev=>[...prev,{...d.data,status:"active"}]);setShowAddInspector(false);setNewInspector({name:"",email:"",password:""});} else{alert(d.message);} }catch(e){alert("Error");} }}
                    style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Add Inspector</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ASSIGNMENTS */}
      {activePage==="assignments"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>{ setUserMenuOpen(false); setAssignmentStatusOpen(false); setAssignmentInspectorOpen(false); }}>
          <TopBar/>
          <div style={{ padding:"28px" }}>

            {/* HOW TO USE */}
            <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <button onClick={()=>setShowHowToAssignment(!showHowToAssignment)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  How to use
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowToAssignment?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
              </button>
              {showHowToAssignment&&(
                <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>
                  <div style={{ marginTop:20, marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>What this page is for</p>
                    <p style={{ fontSize:14, color:"#4A3624", lineHeight:1.7 }}>Create and manage Assignments — planned inspection jobs that tie together a vessel, inspector, template version, and due date.</p>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Typical workflow</p>
                    <ol style={{ margin:0, paddingLeft:20 }}>{["Create an assignment and pick vessel, inspector, template version, and due date.","Inspector starts it → a Session is created automatically.","Inspector submits → admin review (if needed) → report generated."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ol>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Key things on this page</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{[["Assignment","— the planned job, not the inspection itself."],["Session","— created when the inspector starts; that's the actual inspection run."],["Status","— tracks whether the assignment is assigned, in-progress, or submitted."]].map(([k,v],i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> {v}</li>)}</ul>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Examples</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{['"Routine inspection due Friday"','"Reinspection after corrective actions"'].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5 }}>{t}</li>)}</ul>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Best practice</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{["Always choose a published template version.","Set due dates and location context clearly for the inspector."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ul>
                  </div>
                  <div style={{ background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:10, padding:"14px 18px", marginBottom:14 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><span style={{ fontSize:13, fontWeight:700, color:P }}>Template vs Assignment vs Session</span></div>
                    {[["Template","the blueprint / program design."],["Assignment","a planned job: inspector + vessel + due date."],["Session","the actual inspection run where answers and evidence are captured, synced, scored, and reported."]].map(([k,v])=><div key={k} style={{ fontSize:13, color:"#4A3624", marginBottom:4, lineHeight:1.6 }}><strong>{k}</strong> — {v}</div>)}
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Need help? Open in full view</div>
                </div>
              )}
            </div>

            <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Assignments</h1>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Assign inspections to inspectors</p>

            {/* Filters row */}
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12, flexWrap:"wrap" }}>
              {/* Status */}
              <div style={{ position:"relative" }} onClick={e=>e.stopPropagation()}>
                <button onClick={e=>{ e.stopPropagation(); setAssignmentStatusOpen(!assignmentStatusOpen); setAssignmentInspectorOpen(false); setAssignmentFleetOpen(false); }} style={{ display:"flex", alignItems:"center", gap:8, background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", fontSize:14, color:"#4A3624", cursor:"pointer", fontFamily:"inherit", minWidth:140 }}>
                  <span style={{ flex:1 }}>{assignmentStatusFilter}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {assignmentStatusOpen&&<div style={{ position:"absolute", top:44, left:0, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:300, minWidth:160, overflow:"hidden" }}>
                  {["All statuses","Assigned","In Progress","Submitted","Completed"].map(opt=><div key={opt} onClick={()=>{ setAssignmentStatusFilter(opt); setAssignmentStatusOpen(false); }} style={{ padding:"10px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>{opt}</div>)}
                </div>}
              </div>
              {/* Inspector */}
              <div style={{ position:"relative" }} onClick={e=>e.stopPropagation()}>
                <button onClick={e=>{ e.stopPropagation(); setAssignmentInspectorOpen(!assignmentInspectorOpen); setAssignmentStatusOpen(false); setAssignmentFleetOpen(false); }} style={{ display:"flex", alignItems:"center", gap:8, background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", fontSize:14, color:"#4A3624", cursor:"pointer", fontFamily:"inherit", minWidth:150 }}>
                  <span style={{ flex:1 }}>{assignmentInspectorFilter}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {assignmentInspectorOpen&&<div style={{ position:"absolute", top:44, left:0, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:300, minWidth:160, overflow:"hidden" }}>
                  {["All inspectors","Ramya Poojary","Capt. Rashid Al Mansoori"].map(opt=><div key={opt} onClick={()=>{ setAssignmentInspectorFilter(opt); setAssignmentInspectorOpen(false); }} style={{ padding:"10px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>{opt}</div>)}
                </div>}
              </div>
              {/* Fleet */}
              <div style={{ position:"relative" }} onClick={e=>e.stopPropagation()}>
                <button onClick={e=>{ e.stopPropagation(); setAssignmentFleetOpen(!assignmentFleetOpen); setAssignmentStatusOpen(false); setAssignmentInspectorOpen(false); }} style={{ display:"flex", alignItems:"center", gap:8, background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", fontSize:14, color:"#4A3624", cursor:"pointer", fontFamily:"inherit", minWidth:130 }}>
                  <span style={{ flex:1 }}>{assignmentFleetFilter}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {assignmentFleetOpen&&<div style={{ position:"absolute", top:44, left:0, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:300, minWidth:150, overflow:"hidden" }}>
                  {["All fleets",...fleets.map(f=>f.name)].map(opt=><div key={opt} onClick={()=>{ setAssignmentFleetFilter(opt); setAssignmentFleetOpen(false); }} style={{ padding:"10px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>{opt}</div>)}
                </div>}
              </div>
              {/* Date from */}
              <input type="date" value={assignmentDateFrom} onChange={e=>setAssignmentDateFrom(e.target.value)} style={{ ...inputStyle, width:"auto", padding:"9px 14px" }}/>
              {/* Date to */}
              <input type="date" value={assignmentDateTo} onChange={e=>setAssignmentDateTo(e.target.value)} style={{ ...inputStyle, width:"auto", padding:"9px 14px" }}/>
            </div>

            {/* Create Assignment button */}
            <div style={{ marginBottom:16 }}>
              <button onClick={e=>{ e.stopPropagation(); setShowCreateAssignment(true); setNewAssignment({vessel:"",templateVersion:"",inspector:"",dueDate:"",notes:""}); }}
                style={{ display:"flex", alignItems:"center", gap:8, background:P, color:"#fff", border:"none", borderRadius:8, padding:"10px 22px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>
                + Create Assignment
              </button>
            </div>

            {/* Table */}
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["VESSEL","FLEET","TEMPLATE","INSPECTOR","DUE","STATUS",""].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:700, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
                <tbody>
                  {assignments.length===0?<tr><td colSpan={7}><EmptyState msg="No assignments yet. Click Create Assignment to start."/></td></tr>
                  :assignments.map(a=>{
                    const v=vessels.find(x=>x.id===a.vessel_id||x.name===a.vessel);
                    return (
                    <tr key={a.id} style={{ borderBottom:"1px solid #f9fafb", position:"relative" }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                      <td style={{ padding:"14px 16px" }}>
                        <span style={{ fontWeight:600, color:"#2E1F12" }}>{a.vessel||v?.name||"—"}</span>
                        {v?.imo&&<span style={{ fontSize:12, color:"#B59D7E", marginLeft:6 }}>{v.imo}</span>}
                      </td>
                      <td style={{ padding:"14px 16px", color:"#4A3624" }}>{v?.fleet||"—"}</td>
                      <td style={{ padding:"14px 16px", color:"#4A3624" }}>{a.template||a.templateVersion||"—"}</td>
                      <td style={{ padding:"14px 16px", color:"#4A3624" }}>{a.inspector||"—"}</td>
                      <td style={{ padding:"14px 16px", color:"#4A3624", whiteSpace:"nowrap" }}>{a.due_date?new Date(a.due_date).toLocaleDateString("en-GB"):(a.dueDate||"—")}</td>
                      <td style={{ padding:"14px 16px" }}>
                        <span style={{ background:"#F3E7D3", color:"#4A3624", borderRadius:6, padding:"3px 10px", fontSize:12, fontWeight:600 }}>{a.status||"assigned"}</span>
                      </td>
                      <td style={{ padding:"14px 16px", textAlign:"right", position:"relative" }}>
                        <button onClick={e=>{ e.stopPropagation(); setAssignMenuOpen(assignMenuOpen===a.id?null:a.id); }} style={{ background:"none", border:"1px solid #E8D9C0", borderRadius:7, cursor:"pointer", color:"#8A6A4E", fontSize:14, fontWeight:700, letterSpacing:"2px", padding:"3px 8px" }}>•••</button>
                        {assignMenuOpen===a.id&&(
                          <div style={{ position:"absolute", right:16, top:"100%", background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:60, minWidth:140 }} onClick={e=>e.stopPropagation()}>
                            <div onClick={()=>{ if(!confirm("Delete this assignment?"))return; fetch(`${API}/api/admin/assignments/${a.id}`,{method:"DELETE",headers:authHeader()}).catch(()=>{}); setAssignments(prev=>prev.filter(x=>x.id!==a.id)); setAssignMenuOpen(null); }} style={{ padding:"11px 16px", fontSize:14, color:"#ef4444", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#fef2f2"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Delete</div>
                          </div>
                        )}
                      </td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* CREATE ASSIGNMENT MODAL */}
          {showCreateAssignment&&(
            <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <div style={{ background:"#FDF8ED", borderRadius:16, width:"100%", maxWidth:580, maxHeight:"88vh", overflowY:"auto", boxShadow:"0 24px 64px rgba(0,0,0,0.3)" }} onClick={e=>e.stopPropagation()}>
                <div style={{ padding:"24px 28px 18px", borderBottom:"1px solid #f3f4f6" }}>
                  <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Create Assignment</h3>
                  <p style={{ fontSize:14, color:"#8A6A4E", margin:0 }}>Assign an inspection template to an inspector for a specific vessel.</p>
                </div>
                <div style={{ padding:"20px 28px" }}>
                  {/* Vessel & Template section */}
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
                    <div style={{ width:36, height:36, background:"#F2EBDD", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M3 17l1.5-8h15L21 17M3 17h18M3 17l-1-3h20l-1 3"/></svg>
                    </div>
                    <span style={{ fontSize:15, fontWeight:700, color:"#2E1F12" }}>Vessel &amp; Template</span>
                  </div>
                  <div style={{ marginBottom:20 }}>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:4 }}>Vessel</label>
                    <div style={{ fontSize:12, color:"#B59D7E", marginBottom:8 }}>Required</div>
                    <select value={newAssignment.vessel} onChange={e=>setNewAssignment({...newAssignment,vessel:e.target.value})}
                      style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer", border:newAssignment.vessel?"1.5px solid #E8D9C0":`2px solid ${P}` }}>
                      <option value="">Select vessel</option>
                      {vessels.map(v=><option key={v.id} value={v.name}>{v.name}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom:28 }}>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:4 }}>Template Version</label>
                    <div style={{ fontSize:12, color:"#B59D7E", marginBottom:8 }}>Required - published only</div>
                    <select value={newAssignment.templateVersion} onChange={e=>setNewAssignment({...newAssignment,templateVersion:e.target.value})}
                      style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                      <option value="">Select template</option>
                      {templates.map(t=><option key={t.id} value={t.name}>{t.name}</option>)}
                    </select>
                  </div>

                  {/* Inspector section */}
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
                    <div style={{ width:36, height:36, background:"#F2EBDD", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                    </div>
                    <span style={{ fontSize:15, fontWeight:700, color:"#2E1F12" }}>Inspector</span>
                  </div>
                  <div style={{ marginBottom:28 }}>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:4 }}>Assigned Inspector</label>
                    <div style={{ fontSize:12, color:"#B59D7E", marginBottom:8 }}>Required</div>
                    <select value={newAssignment.inspector} onChange={e=>setNewAssignment({...newAssignment,inspector:e.target.value})}
                      style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                      <option value="">Select inspector</option>
                      {inspectors.map(i=><option key={i.id} value={i.name}>{i.name}</option>)}
                    </select>
                  </div>

                  {/* Schedule & Notes section */}
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
                    <div style={{ width:36, height:36, background:"#F2EBDD", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    </div>
                    <span style={{ fontSize:15, fontWeight:700, color:"#2E1F12" }}>Schedule &amp; Notes</span>
                  </div>
                  <div style={{ marginBottom:20 }}>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:4 }}>Due Date</label>
                    <div style={{ fontSize:12, color:"#B59D7E", marginBottom:8 }}>Recommended</div>
                    <input type="date" value={newAssignment.dueDate} onChange={e=>setNewAssignment({...newAssignment,dueDate:e.target.value})} style={inputStyle}/>
                  </div>
                  <div style={{ marginBottom:8 }}>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:4 }}>Notes</label>
                    <div style={{ fontSize:12, color:"#B59D7E", marginBottom:8 }}>Optional instructions for the inspector</div>
                    <textarea value={newAssignment.notes} onChange={e=>setNewAssignment({...newAssignment,notes:e.target.value})} placeholder="Assignment notes..." rows={4} style={{ ...inputStyle, resize:"vertical", lineHeight:1.6 }}/>
                  </div>
                </div>
                <div style={{ padding:"16px 28px", borderTop:"1px solid #f3f4f6", display:"flex", gap:10, justifyContent:"flex-end" }}>
                  <button onClick={()=>setShowCreateAssignment(false)} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
                  <button onClick={async()=>{ if(!newAssignment.vessel||!newAssignment.inspector)return; try{ const vessel=vessels.find(v=>v.name===newAssignment.vessel); const inspObj=inspectors.find(i=>i.name===newAssignment.inspector||i.email===newAssignment.inspector); const tmplObj=templates.find(t=>t.name===newAssignment.templateVersion); const r=await fetch(`${API}/api/admin/assignments`,{method:"POST",headers:authHeader(),body:JSON.stringify({vessel_id:vessel?.id,template_id:tmplObj?.id,inspector_id:inspObj?.id,due_date:newAssignment.dueDate?newAssignment.dueDate+"T00:00:00":null,notes:newAssignment.notes||null})}); const d=await r.json(); if(d.success){ const rl=await fetch(`${API}/api/admin/assignments`,{headers:authHeader()}); const dl=await rl.json(); if(dl.success)setAssignments(dl.data); setShowCreateAssignment(false); setNewAssignment({vessel:"",templateVersion:"",inspector:"",dueDate:"",notes:""});} }catch(e){alert("Error creating assignment");} }}
                    style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Create Assignment</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* REPORTS */}
      {activePage==="reports"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>setUserMenuOpen(false)}>
          <TopBar/>
          <div style={{ padding:"28px" }}>

            {/* HOW TO USE */}
            <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <button onClick={()=>setShowHowToReports(!showHowToReports)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  How to use
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowToReports?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
              </button>
              {showHowToReports&&(
              <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>
                <div style={{ marginTop:20, marginBottom:16 }}>
                  <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>What this page is for</p>
                  <p style={{ fontSize:14, color:"#4A3624", lineHeight:1.7 }}>Generated inspection reports (PDF + HTML). Reports are created after a session is approved and processing completes. Use this page to view, download, or retry failed reports.</p>
                </div>
                <div style={{ marginBottom:16 }}>
                  <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Typical workflow</p>
                  <ol style={{ margin:0, paddingLeft:20 }}>{["Filter by status, fleet, vessel, or date range.","Click a report row to open the detail view.","Download PDF or HTML when status is Ready.","Use Retry if a report failed (e.g. after fixing a transient error)."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ol>
                </div>
                <div style={{ marginBottom:16 }}>
                  <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Key things on this page</p>
                  <ul style={{ margin:0, paddingLeft:20 }}>{[["Status","— Generating (in progress), Ready (downloadable), or Failed."],["Filters","— narrow by fleet, vessel, or date range."],["Retry","— re-run report generation for failed reports."]].map(([k,v],i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> {v}</li>)}</ul>
                </div>
                <div style={{ marginBottom:16 }}>
                  <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Best practice</p>
                  <ul style={{ margin:0, paddingLeft:20 }}>{["Reports are generated automatically after approval — no manual trigger needed.","If a report is stuck in Generating, check the session status or contact support."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ul>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Need help? Open in full view</div>
              </div>
              )}
            </div>

            {/* Title + Export */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
              <div>
                <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Reports</h1>
                <p style={{ fontSize:14, color:"#8A6A4E", margin:0 }}>Generated inspection reports</p>
              </div>
              <button style={{ display:"flex", alignItems:"center", gap:7, background:"none", border:"none", cursor:"pointer", fontSize:14, color:"#4A3624", fontFamily:"inherit", fontWeight:500 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Export Findings CSV
              </button>
            </div>

            {/* Filters */}
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12, flexWrap:"wrap" }}>
              {[{label:"All statuses", opts:["All statuses","Ready","Generating","Failed"]},
                {label:"All fleets", opts:["All fleets",...fleets.map(f=>f.name)]},
                {label:"All vessels", opts:["All vessels",...vessels.map(v=>v.name)]},
              ].map(({label,opts},i)=>(
                <select key={i} defaultValue={label} style={{ ...inputStyle, width:"auto", padding:"9px 14px", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer", paddingRight:36 }}>
                  {opts.map(o=><option key={o}>{o}</option>)}
                </select>
              ))}
              <input type="date" style={{ ...inputStyle, width:"auto", padding:"9px 14px" }}/>
              <input type="date" style={{ ...inputStyle, width:"auto", padding:"9px 14px" }}/>
            </div>

            {/* Search */}
            <div style={{ maxWidth:440, display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:10, marginBottom:16 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input placeholder="Search..." style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
            </div>

            {/* Table */}
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["VESSEL","INSPECTOR","TEMPLATE","DATE","STATUS"].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:700, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
                <tbody>
                  {approvedReports.length===0?<tr><td colSpan={5}><EmptyState msg="No reports generated yet. Reports appear here after inspector submissions are reviewed and approved."/></td></tr>
                    :approvedReports.map(r=>(
                    <tr key={r.id} style={{ borderBottom:"1px solid #f9fafb" }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                      <td style={{ padding:"14px 16px", fontWeight:600, color:"#2E1F12" }}>{r.vessel||"—"}</td>
                      <td style={{ padding:"14px 16px", color:"#4A3624" }}>{r.inspector||"—"}</td>
                      <td style={{ padding:"14px 16px", color:"#4A3624" }}>{r.template||"—"}</td>
                      <td style={{ padding:"14px 16px", color:"#4A3624", whiteSpace:"nowrap" }}>{r.created_at?new Date(r.created_at).toLocaleDateString("en-GB"):"—"}</td>
                      <td style={{ padding:"14px 16px" }}><span style={{ background:"#dcfce7", color:"#166534", borderRadius:6, padding:"3px 10px", fontSize:12, fontWeight:600 }}>{r.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SCORING / AI — ComingSoon */}
      {activePage==="scoring"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>{ setUserMenuOpen(false); setScoringMenuOpen(null); }}>
          <TopBar/>
          <div style={{ padding:"28px" }}>

            {/* HOW TO USE */}
            <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <button onClick={()=>setShowHowToScoring(!showHowToScoring)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  How to use
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowToScoring?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
              </button>
              {showHowToScoring&&(
                <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>
                  <div style={{ marginTop:20, marginBottom:18 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>What this profile controls</p>
                    </div>
                    <p style={{ fontSize:14, color:"#4A3624", lineHeight:1.7, marginBottom:6 }}>Converts answers into category scores and an overall outcome (Pass / Conditional / Fail).</p>
                    <p style={{ fontSize:14, color:"#4A3624", lineHeight:1.7 }}>Applies override rules like "any critical fail = overall fail".</p>
                  </div>
                  <div style={{ marginBottom:18 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>When to create a new profile</p>
                    </div>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {["Different clients want different pass thresholds.","Stricter rules for critical failures.","Missing evidence should downgrade outcome."].map((t,i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ marginBottom:18 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>What the settings mean</p>
                    </div>
                    <p style={{ fontSize:14, color:"#4A3624", marginBottom:8 }}><strong>Scoring method:</strong> Weighted pass percentage (default).</p>
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:6 }}>Thresholds</p>
                    <ul style={{ margin:"0 0 12px", paddingLeft:20 }}>
                      {[["Pass threshold","(e.g. 90%) — score at or above this is a Pass."],["Conditional threshold","(e.g. 75%) — score between this and pass is Conditional."]].map(([k,v],i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> {v}</li>
                      ))}
                    </ul>
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:6 }}>N/A and Not Observed handling</p>
                    <ul style={{ margin:"0 0 12px", paddingLeft:20 }}>
                      {["Exclude N/A from the denominator (recommended).","Treat Not Observed as Fail (only if policy requires)."].map((t,i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>
                      ))}
                    </ul>
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:6 }}>Critical overrides</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {["Any critical fail → fail.","Missing required evidence → conditional.","Major fail count override (fail if too many)."].map((t,i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ marginBottom:18 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>Example Presets</p>
                    </div>
                    {[["Strict:","Pass 92 / Conditional 80 / critical override ON / major fail override at 3."],["Balanced:","Pass 90 / Conditional 75 / critical override ON / major fail override at 5."],["Training:","Lower thresholds, evidence downgrade optional."]].map(([k,v],i)=>(
                      <p key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:6, lineHeight:1.6 }}><strong>{k}</strong> {v}</p>
                    ))}
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>Best Practice</p>
                    </div>
                    <ul style={{ margin:0, paddingLeft:20 }}>
                      {["Confirm thresholds match your internal policy.","Use the test tool to simulate outcomes before going live.",'Keep "any critical fail → fail" ON for safety-first programs.'].map((t,i)=>(
                        <li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    Need help? Open in full view
                  </div>
                </div>
              )}
            </div>

            {/* Title + Search + Add */}
            <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Scoring Profiles</h1>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Configure scoring methods, thresholds, and override rules</p>
            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:16 }}>
              <div style={{ flex:1, maxWidth:480, display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:10 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input value={scoringSearch} onChange={e=>setScoringSearch(e.target.value)} placeholder="Search..." style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
              </div>
              <button onClick={e=>{ e.stopPropagation(); setShowAddScoringProfile(true); setScoringStep(1); setNewScoringProfile({name:"",description:"",method:"Weighted Pass Percentage",passThreshold:90,conditional:75,excludeNA:true,notObservedAsFail:false,criticalOverride:true,evidenceDowngrade:true,majorFailOverride:false,majorFailCount:5}); }}
                style={{ display:"flex", alignItems:"center", gap:8, background:P, color:"#fff", border:"none", borderRadius:8, padding:"10px 22px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>+ Add Profile</button>
            </div>

            {/* Table */}
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"visible" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                <thead>
                  <tr style={{ borderBottom:"1px solid #f3f4f6" }}>
                    {["PROFILE NAME","METHOD","PASS THRESHOLD","CONDITIONAL","USED BY",""].map(h=>(
                      <th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:700, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scoringProfiles.filter(p=>!scoringSearch||p.name.toLowerCase().includes(scoringSearch.toLowerCase())).length===0
                    ?<tr><td colSpan={6}><EmptyState msg="No scoring profiles yet."/></td></tr>
                    :scoringProfiles.filter(p=>!scoringSearch||p.name.toLowerCase().includes(scoringSearch.toLowerCase())).map(p=>(
                      <tr key={p.id} style={{ borderBottom:"1px solid #f9fafb" }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                        <td style={{ padding:"14px 16px", fontWeight:600, color:"#2E1F12" }}>{p.name}</td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{p.method||"—"}</td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{p.passThreshold?`${p.passThreshold}%`:"—"}</td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{p.conditional?`${p.conditional}%`:"—"}</td>
                        <td style={{ padding:"14px 16px" }}>
                          {p.usedBy>0
                            ?<span style={{ background:"#F2EBDD", color:"#4A3624", borderRadius:20, padding:"3px 12px", fontSize:12, fontWeight:500 }}>{p.usedBy} templates</span>
                            :<span style={{ color:"#B59D7E", fontSize:13 }}>0 templates</span>}
                        </td>
                        <td style={{ padding:"14px 16px", textAlign:"right", position:"relative" }} onClick={e=>e.stopPropagation()}>
                          <button onClick={e=>{ e.stopPropagation(); setScoringMenuOpen(scoringMenuOpen===p.id?null:p.id); }} style={{ background:"none", border:"1px solid #E8D9C0", borderRadius:7, cursor:"pointer", color:"#8A6A4E", fontSize:14, fontWeight:700, letterSpacing:"2px", padding:"3px 8px" }}>•••</button>
                          {scoringMenuOpen===p.id&&(
                            <div style={{ position:"absolute", right:8, top:44, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 28px rgba(0,0,0,0.15)", zIndex:999, minWidth:140, overflow:"hidden" }} onClick={e=>e.stopPropagation()}>
                              <div style={{ padding:"11px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Edit</div>
                              <div style={{ height:1, background:"#fee2e2", margin:"2px 0" }}/>
                              <div onClick={()=>{ fetch(`${API}/api/admin/profiles/${p.id}`,{method:"DELETE",headers:authHeader()}).catch(()=>{}); setScoringProfiles(prev=>prev.filter(x=>x.id!==p.id)); setScoringMenuOpen(null); }} style={{ padding:"11px 16px", fontSize:14, color:"#ef4444", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#fef2f2"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Delete</div>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {scoringProfiles.length>0&&<div style={{ padding:"10px 16px", fontSize:13, color:"#8A6A4E", borderTop:"1px solid #f3f4f6" }}>Showing 1–{scoringProfiles.filter(p=>!scoringSearch||p.name.toLowerCase().includes(scoringSearch.toLowerCase())).length} of {scoringProfiles.filter(p=>!scoringSearch||p.name.toLowerCase().includes(scoringSearch.toLowerCase())).length}</div>}
            </div>
          </div>

          {/* ADD SCORING PROFILE MODAL */}
          {showAddScoringProfile&&(
            <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <div style={{ background:"#FDF8ED", borderRadius:16, width:"100%", maxWidth:600, maxHeight:"88vh", display:"flex", flexDirection:"column", boxShadow:"0 24px 64px rgba(0,0,0,0.3)" }} onClick={e=>e.stopPropagation()}>
                <div style={{ padding:"24px 28px 18px", borderBottom:"1px solid #f3f4f6" }}>
                  <button onClick={()=>setShowAddScoringProfile(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
                  <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>New Scoring Profile</h3>
                  <p style={{ fontSize:14, color:"#8A6A4E", margin:0 }}>Configure how inspection answers are scored and graded</p>
                </div>
                {/* Stepper */}
                <div style={{ padding:"16px 28px", borderBottom:"1px solid #f3f4f6", display:"flex", gap:8, flexWrap:"wrap" }}>
                  {["Basics","Method & Thresholds","Critical Overrides","Test Scoring"].map((s,i)=>(
                    <button key={s} onClick={()=>setScoringStep(i+1)} style={{ display:"flex", alignItems:"center", gap:6, padding:"7px 14px", borderRadius:20, border:"none", cursor:"pointer", fontFamily:"inherit", fontSize:12, fontWeight:600, background:scoringStep===i+1?P:"#F3E7D3", color:scoringStep===i+1?"#fff":"#8A6A4E" }}>
                      <span style={{ width:18, height:18, borderRadius:"50%", background:scoringStep===i+1?"rgba(255,255,255,0.25)":"#E8D9C0", display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700 }}>{i+1}</span>
                      {s}
                    </button>
                  ))}
                </div>
                <div style={{ flex:1, overflowY:"auto", padding:"20px 28px" }}>
                  {/* Step 1: Basics */}
                  {scoringStep===1&&(
                    <div>
                      <div style={{ marginBottom:20 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
                          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Profile Name <span style={{ color:"#ef4444" }}>*</span></label>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        </div>
                        <input value={newScoringProfile.name} onChange={e=>setNewScoringProfile({...newScoringProfile,name:e.target.value})} placeholder="e.g. Strict Scoring" style={inputStyle}/>
                      </div>
                      <div>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
                          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Description</label>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        </div>
                        <textarea value={newScoringProfile.description} onChange={e=>setNewScoringProfile({...newScoringProfile,description:e.target.value})} placeholder="Describe the scoring approach..." rows={4} style={{ ...inputStyle, resize:"vertical", lineHeight:1.6 }}/>
                      </div>
                    </div>
                  )}
                  {/* Step 2: Method & Thresholds */}
                  {scoringStep===2&&(
                    <div style={{ background:"#F7EFE0", borderRadius:10, padding:"24px" }}>
                      <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:20 }}>Method & Thresholds</p>
                      <div style={{ marginBottom:20 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Scoring Method</label>
                        <select value={newScoringProfile.method} onChange={e=>setNewScoringProfile({...newScoringProfile,method:e.target.value})}
                          style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                          <option>Weighted Pass Percentage</option>
                          <option>Simple Pass Percentage</option>
                          <option>Category-Based</option>
                        </select>
                      </div>
                      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:20 }}>
                        <div>
                          <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:12 }}>
                            <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Pass Threshold: {newScoringProfile.passThreshold}%</label>
                          </div>
                          <input type="range" min="50" max="100" value={newScoringProfile.passThreshold} onChange={e=>setNewScoringProfile({...newScoringProfile,passThreshold:Number(e.target.value)})} style={{ width:"100%", accentColor:P, cursor:"pointer" }}/>
                        </div>
                        <div>
                          <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:12 }}>
                            <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Conditional Threshold: {newScoringProfile.conditional}%</label>
                          </div>
                          <input type="range" min="50" max="100" value={newScoringProfile.conditional} onChange={e=>setNewScoringProfile({...newScoringProfile,conditional:Number(e.target.value)})} style={{ width:"100%", accentColor:P, cursor:"pointer" }}/>
                        </div>
                      </div>
                      {[{key:"excludeNA",label:"Exclude N/A from denominator",desc:"Recommended for most inspections"},{key:"notObservedAsFail",label:"Treat Not Observed as Fail",desc:"Only if policy requires"}].map(({key,label,desc})=>(
                        <div key={key} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderTop:"1px solid #f3f4f6" }}>
                          <div><div style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>{label}</div><div style={{ fontSize:12, color:"#B59D7E" }}>{desc}</div></div>
                          <div onClick={()=>setNewScoringProfile(p=>({...p,[key]:!p[key]}))} style={{ width:48, height:26, borderRadius:13, background:newScoringProfile[key]?P:"#DECBAB", cursor:"pointer", position:"relative", flexShrink:0 }}>
                            <div style={{ width:20, height:20, borderRadius:"50%", background:"#FDF8ED", position:"absolute", top:3, left:newScoringProfile[key]?25:3, transition:"left 0.2s" }}/>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Step 3: Critical Overrides */}
                  {scoringStep===3&&(
                    <div>
                      <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Override rules that take precedence over the calculated score</p>
                      {[
                        {key:"criticalOverride", label:"Any Critical Fail → Automatic Fail", desc:"If any question with critical severity is marked as fail, the entire inspection fails regardless of score", defaultOn:true},
                        {key:"evidenceDowngrade", label:"Missing Required Evidence → Conditional", desc:"If any required evidence is not provided, the result is capped at Conditional even if the score is passing", defaultOn:true},
                        {key:"majorFailOverride", label:"Major Fail Count Override", desc:"If the number of major-severity fails exceeds a threshold, override the result to Fail", defaultOn:false},
                        {key:"categoryFailOverride", label:"Category Fail Override", desc:"If any single category falls below a threshold, override the result to Fail", defaultOn:false},
                      ].map(({key,label,desc,defaultOn})=>(
                        <div key={key} style={{ background:"#FDF8ED", borderRadius:10, padding:"18px 20px", marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"center", border:"1px solid #E8D9C0" }}>
                          <div style={{ flex:1, paddingRight:16 }}>
                            <div style={{ fontSize:14, fontWeight:600, color:"#2E1F12", marginBottom:4 }}>{label}</div>
                            <div style={{ fontSize:12, color:"#8A6A4E", lineHeight:1.5 }}>{desc}</div>
                          </div>
                          <div onClick={()=>setNewScoringProfile(p=>({...p,[key]:!p[key]}))}
                            style={{ width:48, height:26, borderRadius:13, background:newScoringProfile[key]?P:"#DECBAB", cursor:"pointer", position:"relative", flexShrink:0, transition:"background 0.2s" }}>
                            <div style={{ width:20, height:20, borderRadius:"50%", background:"#FDF8ED", position:"absolute", top:3, left:newScoringProfile[key]?25:3, transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}/>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Step 4: Test Scoring */}
                  {scoringStep===4&&(
                    <div>
                      <div style={{ marginBottom:16 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:10 }}>
                          <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Template Version</label>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        </div>
                        <select value={newScoringProfile.simTemplate||""} onChange={e=>setNewScoringProfile({...newScoringProfile,simTemplate:e.target.value,simResults:null})}
                          style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer", border:`2px solid ${P}` }}>
                          <option value="">Select template version...</option>
                          <option>PSC Checklist v2.1</option>
                          <option>SIRE 2.0 v1.3</option>
                          <option>Internal Audit v4.0</option>
                        </select>
                      </div>
                      <button onClick={()=>setNewScoringProfile({...newScoringProfile, simResults:true})}
                        style={{ width:"100%", padding:"13px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:16 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        Run Sample Scoring
                      </button>
                      {newScoringProfile.simResults&&(
                        <div style={{ background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:10, padding:"20px" }}>
                          <p style={{ fontSize:14, fontWeight:700, color:"#4A3624", marginBottom:14 }}>Sample Outcomes</p>
                          {[
                            {icon:"✅", iconColor:"#16a34a", scenario:"45/50 pass, 0 critical fails", score:"90%", outcome:"Pass", outcomeBg:P, outcomeColor:"#fff"},
                            {icon:"⚠️", iconColor:"#d97706", scenario:"40/50 pass, 0 critical fails", score:"80%", outcome:"Conditional", outcomeBg:"#fff", outcomeColor:"#4A3624"},
                            {icon:"❌", iconColor:"#ef4444", scenario:"35/50 pass, 1 critical fail", score:"70%", outcome:"Fail (Override)", outcomeBg:"#fff", outcomeColor:"#ef4444"},
                          ].map((r,i)=>(
                            <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 14px", background:"#FDF8ED", borderRadius:8, marginBottom:8, border:"1px solid #f3f4f6" }}>
                              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                                <span style={{ fontSize:16 }}>{r.icon}</span>
                                <span style={{ fontSize:13, color:"#4A3624" }}>{r.scenario}</span>
                              </div>
                              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                                <span style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>{r.score}</span>
                                <span style={{ background:r.outcomeBg, color:r.outcomeColor, borderRadius:20, padding:"3px 12px", fontSize:12, fontWeight:600, border:r.outcomeBg==="#fff"?"1px solid #E8D9C0":"none" }}>{r.outcome}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {/* Footer */}
                <div style={{ padding:"16px 28px", borderTop:"1px solid #f3f4f6", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <button onClick={()=>setNewScoringProfile({name:"",description:"",method:"Weighted Pass Percentage",passThreshold:90,conditional:75,excludeNA:true,notObservedAsFail:false,criticalOverride:true,evidenceDowngrade:true,majorFailOverride:false,majorFailCount:5})}
                    style={{ display:"flex", alignItems:"center", gap:6, background:"none", border:"none", cursor:"pointer", fontSize:13, color:"#8A6A4E", fontFamily:"inherit" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.48"/></svg>
                    Reset to defaults
                  </button>
                  <div style={{ display:"flex", gap:10 }}>
                    {scoringStep>1&&<button onClick={()=>setScoringStep(scoringStep-1)} style={{ display:"flex", alignItems:"center", gap:6, padding:"9px 20px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#4A3624" }}>‹ Back</button>}
                    {scoringStep<4
                      ?<button onClick={()=>setScoringStep(scoringStep+1)} style={{ padding:"9px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Next ›</button>
                      :<button onClick={async()=>{ if(!newScoringProfile.name)return; try{ const r=await fetch(`${API}/api/admin/profiles`,{method:"POST",headers:authHeader(),body:JSON.stringify({kind:"scoring",name:newScoringProfile.name,data:{method:"Weighted %",passThreshold:newScoringProfile.passThreshold,conditional:newScoringProfile.conditional,usedBy:0}})}); const d=await r.json(); if(d.success){ setScoringProfiles(prev=>[...prev,{id:d.data.id,name:newScoringProfile.name,method:"Weighted %",passThreshold:newScoringProfile.passThreshold,conditional:newScoringProfile.conditional,usedBy:0}]); setShowAddScoringProfile(false);} }catch(e){alert("Error");} }} style={{ display:"flex", alignItems:"center", gap:7, padding:"9px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        Save Profile
                      </button>
                    }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {activePage==="aiprofiles"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>{ setUserMenuOpen(false); setAiMenuOpen(null); }}>
          <TopBar/>
          <div style={{ padding:"28px" }}>

            {/* HOW TO USE */}
            <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <button onClick={()=>setShowHowToAI(!showHowToAI)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  How to use
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowToAI?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
              </button>
              {showHowToAI&&(
                <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>
                  <div style={{ marginTop:20, marginBottom:18 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>What this profile controls</p></div>
                    <p style={{ fontSize:14, color:"#4A3624", marginBottom:6, lineHeight:1.7 }}>Global AI behaviour: what runs (vision / OCR / summary), confidence thresholds, and when review is required.</p>
                    <p style={{ fontSize:14, fontWeight:700, color:P, lineHeight:1.7 }}>AI is advisory-only in v1 — it suggests, it does not auto-fail.</p>
                  </div>
                  <div style={{ marginBottom:18 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg><p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>When to create a new profile</p></div>
                    <ul style={{ margin:0, paddingLeft:20 }}>{["Different strictness on review for critical items.","Different confidence thresholds.","Different operational workloads (review queue capacity)."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ul>
                  </div>
                  <div style={{ marginBottom:18 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg><p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>What the settings mean</p></div>
                    <p style={{ fontSize:14, color:"#4A3624", marginBottom:8 }}><strong>Advisory-only mode:</strong> Recommended ON. AI provides notes but never auto-scores.</p>
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:6 }}>Model selection</p>
                    <ul style={{ margin:"0 0 12px", paddingLeft:20 }}>{["Vision model — which AI model analyses photos.","OCR toggle — extract text from documents in evidence.","Summary generation — create natural-language finding summaries."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ul>
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:6 }}>Confidence thresholds</p>
                    <ul style={{ margin:"0 0 12px", paddingLeft:20 }}>{[["Auto-attach notes at ≥ X","— high confidence, notes added automatically."],["Require review when < Y","— low confidence, sent to review queue."]].map(([k,v],i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> {v}</li>)}</ul>
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:6 }}>Routing rules</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{["Always review critical.","Always review major (optional).","Review on disagreement (inspector pass vs AI concern).","Review when required evidence missing."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ul>
                  </div>
                  <div style={{ marginBottom:18 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg><p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>Example Presets</p></div>
                    {[["Conservative (launch):","Auto-attach 0.92 / review < 0.85 / review critical ON / disagreement ON."],["High-automation (later):","Auto-attach 0.90 / review < 0.80 / review critical + major ON."],["Reviewer-heavy:","Higher review sensitivity for compliance programs."]].map(([k,v],i)=><p key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:6, lineHeight:1.6 }}><strong>{k}</strong> {v}</p>)}
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>Best Practice</p></div>
                    <ul style={{ margin:0, paddingLeft:20 }}>{["Start conservative, loosen later based on performance.","Always review critical items.","Keep AI advisory-only until trust is established."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ul>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Need help? Open in full view</div>
                </div>
              )}
            </div>

            <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>AI Profiles</h1>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Configure AI analysis models, confidence thresholds, and routing rules</p>
            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:16 }}>
              <div style={{ flex:1, maxWidth:480, display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:10 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input value={aiSearch} onChange={e=>setAiSearch(e.target.value)} placeholder="Search..." style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
              </div>
              <button onClick={e=>{ e.stopPropagation(); setShowAddAI(true); setAiStep(1); setNewAI({name:"",description:"",advisoryOnly:true,visionModel:"Vision v2 (Standard)",ocrExtraction:false,llmSummary:true,autoAttachAt:0.85,reviewWhenBelow:0.60,reviewCritical:true,reviewMajor:false,reviewDisagreement:true,reviewMissingEvidence:true}); }}
                style={{ display:"flex", alignItems:"center", gap:8, background:P, color:"#fff", border:"none", borderRadius:8, padding:"10px 22px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>+ Add Profile</button>
            </div>

            {/* Table */}
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"visible" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["PROFILE NAME","MODEL","REVIEW THRESHOLD","USED BY",""].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:700, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
                <tbody>
                  {aiProfiles.filter(p=>!aiSearch||p.name.toLowerCase().includes(aiSearch.toLowerCase())).length===0
                    ?<tr><td colSpan={5}><EmptyState msg="No AI profiles yet."/></td></tr>
                    :aiProfiles.filter(p=>!aiSearch||p.name.toLowerCase().includes(aiSearch.toLowerCase())).map(p=>(
                      <tr key={p.id} style={{ borderBottom:"1px solid #f9fafb" }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                        <td style={{ padding:"14px 16px", fontWeight:600, color:"#2E1F12" }}>{p.name}</td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{p.visionModel||"—"}</td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{p.reviewWhenBelow!=null?`< ${p.reviewWhenBelow}`:"—"}</td>
                        <td style={{ padding:"14px 16px" }}><span style={{ background:"#F2EBDD", color:"#4A3624", borderRadius:20, padding:"3px 12px", fontSize:12, fontWeight:500 }}>{p.usedBy||0} templates</span></td>
                        <td style={{ padding:"14px 16px", textAlign:"right", position:"relative" }} onClick={e=>e.stopPropagation()}>
                          <button onClick={e=>{ e.stopPropagation(); setAiMenuOpen(aiMenuOpen===p.id?null:p.id); }} style={{ background:"none", border:"1px solid #E8D9C0", borderRadius:7, cursor:"pointer", color:"#8A6A4E", fontSize:14, fontWeight:700, letterSpacing:"2px", padding:"3px 8px" }}>•••</button>
                          {aiMenuOpen===p.id&&(
                            <div style={{ position:"absolute", right:8, top:44, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 28px rgba(0,0,0,0.15)", zIndex:999, minWidth:140, overflow:"hidden" }} onClick={e=>e.stopPropagation()}>
                              <div style={{ padding:"11px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Edit</div>
                              <div style={{ height:1, background:"#fee2e2", margin:"2px 0" }}/>
                              <div onClick={()=>{ fetch(`${API}/api/admin/profiles/${p.id}`,{method:"DELETE",headers:authHeader()}).catch(()=>{}); setAiProfiles(prev=>prev.filter(x=>x.id!==p.id)); setAiMenuOpen(null); }} style={{ padding:"11px 16px", fontSize:14, color:"#ef4444", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#fef2f2"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Delete</div>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* NEW AI PROFILE MODAL */}
          {showAddAI&&(
            <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <div style={{ background:"#FDF8ED", borderRadius:16, width:"100%", maxWidth:640, maxHeight:"88vh", display:"flex", flexDirection:"column", boxShadow:"0 24px 64px rgba(0,0,0,0.3)" }} onClick={e=>e.stopPropagation()}>
                <div style={{ padding:"24px 28px 18px", borderBottom:"1px solid #f3f4f6", position:"relative" }}>
                  <button onClick={()=>setShowAddAI(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
                  <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>New AI Profile</h3>
                  <p style={{ fontSize:14, color:"#8A6A4E", margin:0 }}>Configure how AI analyzes inspection evidence and routes findings</p>
                </div>
                {/* Stepper */}
                <div style={{ padding:"14px 28px", borderBottom:"1px solid #f3f4f6", display:"flex", gap:8, flexWrap:"wrap" }}>
                  {["Basics","Model Selection","Confidence","Routing Rules","Test Matrix"].map((s,i)=>(
                    <button key={s} onClick={()=>setAiStep(i+1)} style={{ display:"flex", alignItems:"center", gap:6, padding:"7px 14px", borderRadius:20, border:"none", cursor:"pointer", fontFamily:"inherit", fontSize:12, fontWeight:600, background:aiStep===i+1?P:"#F3E7D3", color:aiStep===i+1?"#fff":"#8A6A4E" }}>
                      <span style={{ width:18, height:18, borderRadius:"50%", background:aiStep===i+1?"rgba(255,255,255,0.25)":"#E8D9C0", display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700 }}>{i+1}</span>
                      {s}
                    </button>
                  ))}
                </div>
                <div style={{ flex:1, overflowY:"auto", padding:"20px 28px" }}>

                  {/* Step 1: Basics */}
                  {aiStep===1&&(
                    <div>
                      <div style={{ marginBottom:20 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Profile Name <span style={{ color:"#ef4444" }}>*</span></label><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <input value={newAI.name} onChange={e=>setNewAI({...newAI,name:e.target.value})} placeholder="e.g. High Precision AI" style={inputStyle}/>
                      </div>
                      <div style={{ marginBottom:20 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Description</label><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <textarea value={newAI.description} onChange={e=>setNewAI({...newAI,description:e.target.value})} placeholder="Describe the AI analysis approach..." rows={4} style={{ ...inputStyle, resize:"vertical", lineHeight:1.6 }}/>
                      </div>
                      <div style={{ background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:10, padding:"18px 20px", display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                        <div style={{ flex:1, paddingRight:20 }}>
                          <div style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:6 }}>Advisory-Only Mode</div>
                          <div style={{ fontSize:13, color:"#8A6A4E", lineHeight:1.6 }}>AI provides notes and suggestions but does not auto-score or auto-fail any questions. Recommended for most use cases. Inspectors always have the final say.</div>
                        </div>
                        <div onClick={()=>setNewAI({...newAI,advisoryOnly:!newAI.advisoryOnly})} style={{ width:48, height:26, borderRadius:13, background:newAI.advisoryOnly?P:"#DECBAB", cursor:"pointer", position:"relative", flexShrink:0 }}>
                          <div style={{ width:20, height:20, borderRadius:"50%", background:"#FDF8ED", position:"absolute", top:3, left:newAI.advisoryOnly?25:3, transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}/>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Model Selection */}
                  {aiStep===2&&(
                    <div>
                      <div style={{ marginBottom:20 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:10 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Vision Model</label><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <select value={newAI.visionModel} onChange={e=>setNewAI({...newAI,visionModel:e.target.value})} style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                          <option>Vision v2 (Standard)</option>
                          <option>Vision v3 (High Accuracy)</option>
                          <option>Vision v1 (Legacy)</option>
                        </select>
                      </div>
                      {[{key:"ocrExtraction",label:"OCR Text Extraction",desc:"Extract and analyze text from certificates, logbooks, and documents in evidence photos",defaultOn:false},{key:"llmSummary",label:"LLM Summary Generation",desc:"Generate natural-language summaries of findings for reports",defaultOn:true}].map(({key,label,desc})=>(
                        <div key={key} style={{ background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:10, padding:"18px 20px", marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                          <div style={{ flex:1, paddingRight:20 }}>
                            <div style={{ fontSize:14, fontWeight:600, color:"#2E1F12", marginBottom:4 }}>{label}</div>
                            <div style={{ fontSize:13, color:"#8A6A4E", lineHeight:1.5 }}>{desc}</div>
                          </div>
                          <div onClick={()=>setNewAI(p=>({...p,[key]:!p[key]}))} style={{ width:48, height:26, borderRadius:13, background:newAI[key]?P:"#DECBAB", cursor:"pointer", position:"relative", flexShrink:0 }}>
                            <div style={{ width:20, height:20, borderRadius:"50%", background:"#FDF8ED", position:"absolute", top:3, left:newAI[key]?25:3, transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}/>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Step 3: Confidence */}
                  {aiStep===3&&(
                    <div>
                      <div style={{ marginBottom:24 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:12 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Auto-Attach Notes at ≥ {newAI.autoAttachAt.toFixed(2)}</label><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <input type="range" min="0.5" max="1" step="0.01" value={newAI.autoAttachAt} onChange={e=>setNewAI({...newAI,autoAttachAt:Number(e.target.value)})} style={{ width:"100%", accentColor:P, cursor:"pointer" }}/>
                      </div>
                      <div style={{ marginBottom:20 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:12 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Require Review When &lt; {newAI.reviewWhenBelow.toFixed(2)}</label><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <input type="range" min="0.5" max="1" step="0.01" value={newAI.reviewWhenBelow} onChange={e=>setNewAI({...newAI,reviewWhenBelow:Number(e.target.value)})} style={{ width:"100%", accentColor:P, cursor:"pointer" }}/>
                      </div>
                      <div style={{ background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:10, padding:"16px 18px", fontSize:13, color:"#4A3624", lineHeight:1.8 }}>
                        <div><strong>≥ {newAI.autoAttachAt.toFixed(2)}:</strong> AI notes auto-attached (high confidence)</div>
                        <div><strong>{newAI.reviewWhenBelow.toFixed(2)} – {(newAI.autoAttachAt-0.01).toFixed(2)}:</strong> AI notes flagged for optional review</div>
                        <div><strong>&lt; {newAI.reviewWhenBelow.toFixed(2)}:</strong> Sent to review queue (low confidence)</div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Routing Rules */}
                  {aiStep===4&&(
                    <div>
                      <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:16 }}>Rules that override confidence-based routing</p>
                      {[
                        {key:"reviewCritical", label:"Always review critical severity", desc:"Send all critical-severity AI findings to the review queue regardless of confidence", defaultOn:true},
                        {key:"reviewMajor", label:"Always review major severity", desc:"Send all major-severity AI findings to the review queue regardless of confidence", defaultOn:false},
                        {key:"reviewDisagreement", label:"Review when inspector passes but AI flags fail", desc:"When the inspector marks pass but AI detects a possible failure, flag for review", defaultOn:true},
                        {key:"reviewMissingEvidence", label:"Review when required evidence is missing", desc:"Flag for review when a question requires evidence but none was provided", defaultOn:true},
                      ].map(({key,label,desc})=>(
                        <div key={key} style={{ background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, padding:"18px 20px", marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                          <div style={{ flex:1, paddingRight:20 }}>
                            <div style={{ fontSize:14, fontWeight:600, color:"#2E1F12", marginBottom:4 }}>{label}</div>
                            <div style={{ fontSize:13, color:"#8A6A4E", lineHeight:1.5 }}>{desc}</div>
                          </div>
                          <div onClick={()=>setNewAI(p=>({...p,[key]:!p[key]}))} style={{ width:48, height:26, borderRadius:13, background:newAI[key]?P:"#DECBAB", cursor:"pointer", position:"relative", flexShrink:0, transition:"background 0.2s" }}>
                            <div style={{ width:20, height:20, borderRadius:"50%", background:"#FDF8ED", position:"absolute", top:3, left:newAI[key]?25:3, transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}/>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Step 5: Test Matrix */}
                  {aiStep===5&&(
                    <div>
                      <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:16 }}>Preview how severity × confidence combinations are routed</p>
                      <div style={{ background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, overflow:"hidden" }}>
                        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
                          <thead>
                            <tr style={{ background:"#F7EFE0", borderBottom:"1px solid #E8D9C0" }}>
                              <th style={{ padding:"12px 16px", textAlign:"left", color:"#4A3624", fontWeight:600 }}>Severity \ Confidence</th>
                              <th style={{ padding:"12px 16px", textAlign:"center", color:"#4A3624", fontWeight:600 }}>≥ {newAI.autoAttachAt.toFixed(2)} (High)</th>
                              <th style={{ padding:"12px 16px", textAlign:"center", color:"#4A3624", fontWeight:600 }}>{newAI.reviewWhenBelow.toFixed(2)}–{(newAI.autoAttachAt-0.01).toFixed(2)} (Medium)</th>
                              <th style={{ padding:"12px 16px", textAlign:"center", color:"#4A3624", fontWeight:600 }}>&lt; {newAI.reviewWhenBelow.toFixed(2)} (Low)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {sev:"Critical", high:"Review", medium:"Review", low:"Review", highStyle:{bg:A,color:"#fff"}, medStyle:{bg:A,color:"#fff"}, lowStyle:{bg:A,color:"#fff"}},
                              {sev:"Major", high:"Auto-attach", medium:"Flag", low:"Review", highStyle:{bg:P,color:"#fff"}, medStyle:{bg:"#F3E7D3",color:"#4A3624"}, lowStyle:{bg:A,color:"#fff"}},
                              {sev:"Minor", high:"Auto-attach", medium:"Flag", low:"Review", highStyle:{bg:P,color:"#fff"}, medStyle:{bg:"#F3E7D3",color:"#4A3624"}, lowStyle:{bg:A,color:"#fff"}},
                              {sev:"Observation", high:"Auto-attach", medium:"Flag", low:"Review", highStyle:{bg:P,color:"#fff"}, medStyle:{bg:"#F3E7D3",color:"#4A3624"}, lowStyle:{bg:A,color:"#fff"}},
                            ].map(({sev,high,medium,low,highStyle,medStyle,lowStyle})=>(
                              <tr key={sev} style={{ borderTop:"1px solid #f3f4f6" }}>
                                <td style={{ padding:"14px 16px", fontWeight:600, color:"#4A3624" }}>{sev}</td>
                                <td style={{ padding:"14px 16px", textAlign:"center" }}><span style={{ background:highStyle.bg, color:highStyle.color, borderRadius:20, padding:"4px 14px", fontSize:12, fontWeight:600 }}>{high}</span></td>
                                <td style={{ padding:"14px 16px", textAlign:"center" }}><span style={{ background:medStyle.bg, color:medStyle.color, borderRadius:20, padding:"4px 14px", fontSize:12, fontWeight:600, border:medStyle.bg==="#F3E7D3"?"1px solid #E8D9C0":"none" }}>{medium}</span></td>
                                <td style={{ padding:"14px 16px", textAlign:"center" }}><span style={{ background:lowStyle.bg, color:lowStyle.color, borderRadius:20, padding:"4px 14px", fontSize:12, fontWeight:600 }}>{low}</span></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {/* Legend */}
                      <div style={{ display:"flex", alignItems:"center", gap:16, marginTop:14, flexWrap:"wrap" }}>
                        {[{bg:P,color:"#fff",label:"Auto-attach",sub:"High confidence"},{bg:"#F3E7D3",color:"#4A3624",label:"Flag",sub:"Medium confidence"},{bg:A,color:"#fff",label:"Review",sub:"Low confidence / override"}].map(({bg,color,label,sub})=>(
                          <div key={label} style={{ display:"flex", alignItems:"center", gap:8 }}>
                            <span style={{ background:bg, color, borderRadius:20, padding:"3px 12px", fontSize:12, fontWeight:600, border:bg==="#F3E7D3"?"1px solid #E8D9C0":"none" }}>{label}</span>
                            <span style={{ fontSize:12, color:"#8A6A4E" }}>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* Footer */}
                <div style={{ padding:"16px 28px", borderTop:"1px solid #f3f4f6", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <button onClick={()=>setNewAI({name:"",description:"",advisoryOnly:true,visionModel:"Vision v2 (Standard)",ocrExtraction:false,llmSummary:true,autoAttachAt:0.85,reviewWhenBelow:0.60,reviewCritical:true,reviewMajor:false,reviewDisagreement:true,reviewMissingEvidence:true})}
                    style={{ display:"flex", alignItems:"center", gap:6, background:"none", border:"none", cursor:"pointer", fontSize:13, color:"#8A6A4E", fontFamily:"inherit" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.48"/></svg>
                    Reset to defaults
                  </button>
                  <div style={{ display:"flex", gap:10 }}>
                    {aiStep>1&&<button onClick={()=>setAiStep(aiStep-1)} style={{ display:"flex", alignItems:"center", gap:6, padding:"9px 20px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#4A3624" }}>‹ Back</button>}
                    {aiStep<5
                      ?<button onClick={()=>setAiStep(aiStep+1)} style={{ padding:"9px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Next ›</button>
                      :<button onClick={async()=>{ if(!newAI.name)return; try{ const r=await fetch(`${API}/api/admin/profiles`,{method:"POST",headers:authHeader(),body:JSON.stringify({kind:"ai",name:newAI.name,data:{visionModel:newAI.visionModel,reviewWhenBelow:newAI.reviewWhenBelow,usedBy:0}})}); const d=await r.json(); if(d.success){ setAiProfiles(prev=>[...prev,{id:d.data.id,name:newAI.name,visionModel:newAI.visionModel,reviewWhenBelow:newAI.reviewWhenBelow,usedBy:0}]); setShowAddAI(false);} }catch(e){alert("Error");} }} style={{ display:"flex", alignItems:"center", gap:7, padding:"9px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        Save Profile
                      </button>
                    }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* REPORT PROFILES */}
      {activePage==="reportprofiles"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>{ setUserMenuOpen(false); setReportMenuOpen(null); }}>
          <TopBar/>
          <div style={{ padding:"28px" }}>

            {/* HOW TO USE */}
            <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <button onClick={()=>setShowHowToReport(!showHowToReport)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  How to use
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowToReport?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
              </button>
              {showHowToReport&&(
                <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>
                  <div style={{ marginTop:20, marginBottom:18 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>What this profile controls</p></div>
                    <p style={{ fontSize:14, color:"#4A3624", marginBottom:4, lineHeight:1.7 }}>Report structure, branding, and how findings are written and displayed.</p>
                    <p style={{ fontSize:14, color:"#4A3624", lineHeight:1.7 }}>Defines section order and which sections are included.</p>
                  </div>
                  <div style={{ marginBottom:18 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg><p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>When to create a new profile</p></div>
                    <ul style={{ margin:0, paddingLeft:20 }}>{["Different clients want different report formats and branding.","Different tone (formal vs direct).","Different requirements (evidence index mandatory, etc)."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ul>
                  </div>
                  <div style={{ marginBottom:18 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg><p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>What the settings mean</p></div>
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:4 }}>Branding</p>
                    <p style={{ fontSize:14, color:"#4A3624", marginBottom:12, lineHeight:1.7 }}>Logo + header/footer text + confidentiality label.</p>
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:4 }}>Sections</p>
                    <p style={{ fontSize:14, color:"#4A3624", marginBottom:12, lineHeight:1.7 }}>Drag-and-drop section order. Toggle visibility per section.</p>
                    <p style={{ fontSize:14, fontWeight:600, color:"#4A3624", marginBottom:6 }}>Finding wording style</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{[["Tone","— Formal / Neutral / Direct."],["Title format","— numbered, category-prefixed, or descriptive."],["Toggles","— include observation, evidence, risk, recommendation, due date."],["Auto-generate titles","— AI creates concise finding titles."]].map(([k,v],i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> {v}</li>)}</ul>
                  </div>
                  <div style={{ marginBottom:18 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg><p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>Example Presets</p></div>
                    {[["Standard operator report:","Neutral tone, full sections, all fields ON, AI appendix OFF."],["Executive-friendly:","Direct tone, summary + findings first, shorter format."],["Compliance-heavy:","Formal tone, evidence/risk mandatory, scope + sign-off prominent."]].map(([k,v],i)=><p key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:6, lineHeight:1.6 }}><strong>{k}</strong> {v}</p>)}
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", margin:0 }}>Best Practice</p></div>
                    <ul style={{ margin:0, paddingLeft:20 }}>{["Always preview with dummy data before using it.","Keep section order consistent across clients unless required.","Ensure evidence index is enabled if audits require traceability."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ul>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Need help? Open in full view</div>
                </div>
              )}
            </div>

            <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Report Profiles</h1>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Configure report formats, branding, and finding wording</p>
            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:16 }}>
              <div style={{ flex:1, maxWidth:480, display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:10 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input value={reportSearch} onChange={e=>setReportSearch(e.target.value)} placeholder="Search..." style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
              </div>
              <button onClick={e=>{ e.stopPropagation(); setShowAddReport(true); setReportStep(1); setNewReport({name:"",description:"",tone:"Neutral",titleFormat:"Numbered",includeObservation:true,includeEvidence:true,includeRisk:true,includeRecommendation:true,includeDueDate:true,autoGenerateTitles:false,branding:"",sections:["Cover Page","Executive Summary","Findings","Corrective Actions","Evidence Index","Sign-Off"]}); }}
                style={{ display:"flex", alignItems:"center", gap:8, background:P, color:"#fff", border:"none", borderRadius:8, padding:"10px 22px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>+ Add Profile</button>
            </div>

            {/* Table */}
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"visible" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["PROFILE NAME","SECTIONS","BRANDING","USED BY",""].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:700, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
                <tbody>
                  {reportProfiles.filter(p=>!reportSearch||p.name.toLowerCase().includes(reportSearch.toLowerCase())).length===0
                    ?<tr><td colSpan={5}><EmptyState msg="No report profiles yet."/></td></tr>
                    :reportProfiles.filter(p=>!reportSearch||p.name.toLowerCase().includes(reportSearch.toLowerCase())).map(p=>(
                      <tr key={p.id} style={{ borderBottom:"1px solid #f9fafb" }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                        <td style={{ padding:"14px 16px", fontWeight:600, color:"#2E1F12" }}>{p.name}</td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{p.sections?.length ? `${p.sections.length} sections` : "—"}</td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{p.branding||"—"}</td>
                        <td style={{ padding:"14px 16px" }}><span style={{ background:"#F2EBDD", color:"#4A3624", borderRadius:20, padding:"3px 12px", fontSize:12, fontWeight:500 }}>{p.usedBy||0} templates</span></td>
                        <td style={{ padding:"14px 16px", textAlign:"right", position:"relative" }} onClick={e=>e.stopPropagation()}>
                          <button onClick={e=>{ e.stopPropagation(); setReportMenuOpen(reportMenuOpen===p.id?null:p.id); }} style={{ background:"none", border:"1px solid #E8D9C0", borderRadius:7, cursor:"pointer", color:"#8A6A4E", fontSize:14, fontWeight:700, letterSpacing:"2px", padding:"3px 8px" }}>•••</button>
                          {reportMenuOpen===p.id&&(
                            <div style={{ position:"absolute", right:8, top:44, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 28px rgba(0,0,0,0.15)", zIndex:999, minWidth:140, overflow:"hidden" }} onClick={e=>e.stopPropagation()}>
                              <div style={{ padding:"11px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Edit</div>
                              <div style={{ height:1, background:"#fee2e2", margin:"2px 0" }}/>
                              <div onClick={()=>{ fetch(`${API}/api/admin/profiles/${p.id}`,{method:"DELETE",headers:authHeader()}).catch(()=>{}); setReportProfiles(prev=>prev.filter(x=>x.id!==p.id)); setReportMenuOpen(null); }} style={{ padding:"11px 16px", fontSize:14, color:"#ef4444", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#fef2f2"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>Delete</div>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {reportProfiles.length>0&&<div style={{ padding:"10px 16px", fontSize:13, color:"#8A6A4E", borderTop:"1px solid #f3f4f6" }}>Showing 1–{reportProfiles.length} of {reportProfiles.length}</div>}
            </div>
          </div>

          {/* NEW REPORT PROFILE MODAL */}
          {showAddReport&&(
            <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <div style={{ background:"#FDF8ED", borderRadius:16, width:"100%", maxWidth:640, maxHeight:"88vh", display:"flex", flexDirection:"column", boxShadow:"0 24px 64px rgba(0,0,0,0.3)" }} onClick={e=>e.stopPropagation()}>
                <div style={{ padding:"24px 28px 18px", borderBottom:"1px solid #f3f4f6", position:"relative" }}>
                  <button onClick={()=>setShowAddReport(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
                  <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>New Report Profile</h3>
                  <p style={{ fontSize:14, color:"#8A6A4E", margin:0 }}>Configure how inspection reports are generated and formatted</p>
                </div>
                {/* Stepper */}
                <div style={{ padding:"14px 28px", borderBottom:"1px solid #f3f4f6", display:"flex", gap:8, flexWrap:"wrap" }}>
                  {["Basics","Branding","Sections","Finding Wording","Preview"].map((s,i)=>(
                    <button key={s} onClick={()=>setReportStep(i+1)} style={{ display:"flex", alignItems:"center", gap:6, padding:"7px 14px", borderRadius:20, border:"none", cursor:"pointer", fontFamily:"inherit", fontSize:12, fontWeight:600, background:reportStep===i+1?P:"#F3E7D3", color:reportStep===i+1?"#fff":"#8A6A4E" }}>
                      <span style={{ width:18, height:18, borderRadius:"50%", background:reportStep===i+1?"rgba(255,255,255,0.25)":"#E8D9C0", display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700 }}>{i+1}</span>
                      {s}
                    </button>
                  ))}
                </div>
                <div style={{ flex:1, overflowY:"auto", padding:"20px 28px" }}>
                  {/* Step 1: Basics */}
                  {reportStep===1&&(
                    <div>
                      <div style={{ marginBottom:20 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Profile Name <span style={{ color:"#ef4444" }}>*</span></label><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <input value={newReport.name} onChange={e=>setNewReport({...newReport,name:e.target.value})} placeholder="e.g. Client-Facing Report" style={inputStyle}/>
                      </div>
                      <div>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Description</label><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <textarea value={newReport.description} onChange={e=>setNewReport({...newReport,description:e.target.value})} placeholder="Describe the report style..." rows={5} style={{ ...inputStyle, resize:"vertical", lineHeight:1.6 }}/>
                      </div>
                    </div>
                  )}
                  {/* Step 2: Branding */}
                  {reportStep===2&&(
                    <div>
                      <div style={{ marginBottom:20 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Logo URL</label><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <input value={newReport.logoUrl||""} onChange={e=>setNewReport({...newReport,logoUrl:e.target.value})} placeholder="https://example.com/logo.png" style={inputStyle}/>
                      </div>
                      <div style={{ marginBottom:20 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Header Text</label><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <input value={newReport.headerText||""} onChange={e=>setNewReport({...newReport,headerText:e.target.value})} placeholder="e.g. Maritime Safety Inspection Report" style={inputStyle}/>
                      </div>
                      <div style={{ marginBottom:20 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Footer Text</label><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <input value={newReport.footer||""} onChange={e=>setNewReport({...newReport,footer:e.target.value})} placeholder="e.g. © 2025 Your Company Name" style={inputStyle}/>
                      </div>
                      <div>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Confidentiality Label</label><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <select value={newReport.confidentiality||"Confidential"} onChange={e=>setNewReport({...newReport,confidentiality:e.target.value})} style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                          <option>Confidential</option><option>Internal Use Only</option><option>Public</option><option>None</option>
                        </select>
                      </div>
                    </div>
                  )}
                  {/* Step 3: Sections */}
                  {reportStep===3&&(()=>{
                    const allSections=["Executive Summary","Vessel Information","Category Breakdown","Detailed Findings","Evidence Gallery","Corrective Actions","Scoring Summary","AI Analysis Notes"];
                    const enabledCount=(newReport.sections||[]).length;
                    return(
                      <div>
                        <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:16 }}>Toggle and reorder report sections. Drag to change the order.</p>
                        {allSections.map(s=>{
                          const on=(newReport.sections||[]).includes(s);
                          return(
                            <div key={s} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, marginBottom:8 }}>
                              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DECBAB" strokeWidth="2"><circle cx="9" cy="6" r="1" fill="#DECBAB"/><circle cx="15" cy="6" r="1" fill="#DECBAB"/><circle cx="9" cy="12" r="1" fill="#DECBAB"/><circle cx="15" cy="12" r="1" fill="#DECBAB"/><circle cx="9" cy="18" r="1" fill="#DECBAB"/><circle cx="15" cy="18" r="1" fill="#DECBAB"/></svg>
                                <span style={{ fontSize:14, fontWeight:500, color:"#2E1F12" }}>{s}</span>
                              </div>
                              <div onClick={()=>setNewReport(p=>({...p,sections:on?(p.sections||[]).filter(x=>x!==s):[...(p.sections||[]),s]}))} style={{ width:48, height:26, borderRadius:13, background:on?P:"#DECBAB", cursor:"pointer", position:"relative", flexShrink:0, transition:"background 0.2s" }}>
                                <div style={{ width:20, height:20, borderRadius:"50%", background:"#FDF8ED", position:"absolute", top:3, left:on?25:3, transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}/>
                              </div>
                            </div>
                          );
                        })}
                        <p style={{ fontSize:13, color:"#8A6A4E", marginTop:8 }}>{enabledCount} of {allSections.length} sections enabled</p>
                      </div>
                    );
                  })()}
                  {/* Step 4: Finding Wording */}
                  {reportStep===4&&(
                    <div>
                      <div style={{ marginBottom:20 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Tone</label><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <select value={newReport.tone} onChange={e=>setNewReport({...newReport,tone:e.target.value})} style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                          <option>Formal</option><option>Neutral</option><option>Direct</option>
                        </select>
                      </div>
                      <div style={{ marginBottom:20 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}><label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Title Format</label><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                        <select value={newReport.titleFormat} onChange={e=>setNewReport({...newReport,titleFormat:e.target.value})} style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                          <option>Numbered (1.1, 1.2, ...)</option><option>Category-Prefixed</option><option>Descriptive</option>
                        </select>
                      </div>
                      {/* Include in Finding Description box */}
                      <div style={{ border:"1px solid #E8D9C0", borderRadius:10, padding:"18px 20px", marginBottom:16 }}>
                        <p style={{ fontSize:13, fontWeight:700, color:"#4A3624", marginBottom:14 }}>Include in Finding Description</p>
                        {[{key:"includeObservation",label:"Observation",on:true},{key:"includeEvidence",label:"Evidence Reference",on:true},{key:"includeRisk",label:"Risk Assessment",on:true},{key:"includeRecommendation",label:"Recommendation",on:true},{key:"includeDueDate",label:"Due Date",on:false}].map(({key,label})=>(
                          <div key={key} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderTop:"1px solid #f3f4f6" }}>
                            <span style={{ fontSize:14, color:"#4A3624" }}>{label}</span>
                            <div onClick={()=>setNewReport(p=>({...p,[key]:!p[key]}))} style={{ width:48, height:26, borderRadius:13, background:newReport[key]?P:"#DECBAB", cursor:"pointer", position:"relative", flexShrink:0, transition:"background 0.2s" }}>
                              <div style={{ width:20, height:20, borderRadius:"50%", background:"#FDF8ED", position:"absolute", top:3, left:newReport[key]?25:3, transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}/>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Auto-generate short titles */}
                      <div style={{ display:"flex", alignItems:"center", gap:16, padding:"14px 16px", border:"1px solid #E8D9C0", borderRadius:10 }}>
                        <div onClick={()=>setNewReport(p=>({...p,autoGenerateTitles:!p.autoGenerateTitles}))} style={{ width:48, height:26, borderRadius:13, background:newReport.autoGenerateTitles?P:"#DECBAB", cursor:"pointer", position:"relative", flexShrink:0, transition:"background 0.2s" }}>
                          <div style={{ width:20, height:20, borderRadius:"50%", background:"#FDF8ED", position:"absolute", top:3, left:newReport.autoGenerateTitles?25:3, transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}/>
                        </div>
                        <div>
                          <div style={{ fontSize:14, fontWeight:600, color:"#2E1F12", marginBottom:3 }}>Auto-generate short titles</div>
                          <div style={{ fontSize:12, color:"#8A6A4E" }}>Use AI to create concise finding titles from the full observation text</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Step 5: Preview */}
                  {reportStep===5&&(
                    <div>
                      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        <span style={{ fontSize:14, fontWeight:700, color:"#2E1F12" }}>Report Preview</span>
                      </div>
                      <div style={{ border:"1px solid #E8D9C0", borderRadius:10, padding:"24px", background:"#FDF8ED" }}>
                        {/* Header */}
                        <h2 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:6 }}>{newReport.headerText||"Maritime Safety Inspection Report"}</h2>
                        {(newReport.confidentiality&&newReport.confidentiality!=="None")&&(
                          <span style={{ fontSize:12, border:"1px solid #E8D9C0", borderRadius:4, padding:"2px 10px", color:"#4A3624", marginBottom:16, display:"inline-block" }}>{newReport.confidentiality||"Confidential"}</span>
                        )}
                        <div style={{ height:1, background:"#F3E7D3", margin:"14px 0" }}/>
                        {/* Sections list */}
                        {(newReport.sections||[]).map((s,i)=>(
                          <div key={s} style={{ marginBottom:20 }}>
                            <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>{i+1}. {s}</p>
                            <div style={{ height:8, background:"#F3E7D3", borderRadius:4, marginBottom:5, width:"100%" }}/>
                            <div style={{ height:8, background:"#F3E7D3", borderRadius:4, marginBottom:5, width:"75%" }}/>
                          </div>
                        ))}
                        {/* Sample finding */}
                        <div style={{ background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:8, padding:"14px 16px", marginBottom:12 }}>
                          <p style={{ fontSize:13, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Sample Finding: 1.1</p>
                          <p style={{ fontSize:13, color:"#4A3624", marginBottom:4 }}><strong>Observation:</strong> ECDIS software was not updated to the latest version...</p>
                          {newReport.includeEvidence&&<p style={{ fontSize:13, color:"#4A3624", marginBottom:4 }}><strong>Evidence:</strong> Photo IMG_001.jpg, IMG_002.jpg</p>}
                          {newReport.includeRisk&&<p style={{ fontSize:13, color:"#4A3624", marginBottom:4 }}><strong>Risk:</strong> Medium — could impact navigational safety</p>}
                          {newReport.includeRecommendation&&<p style={{ fontSize:13, color:"#4A3624", marginBottom:0 }}><strong>Recommendation:</strong> Update ECDIS to version 4.2.1 before next voyage</p>}
                        </div>
                        {/* Footer */}
                        <p style={{ fontSize:12, color:"#B59D7E", marginTop:16 }}>{newReport.footer||"© 2025 Company Name"}</p>
                      </div>
                    </div>
                  )}
                </div>
                {/* Footer */}
                <div style={{ padding:"16px 28px", borderTop:"1px solid #f3f4f6", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <button onClick={()=>setNewReport({name:"",description:"",tone:"Neutral",titleFormat:"Numbered",includeObservation:true,includeEvidence:true,includeRisk:true,includeRecommendation:true,includeDueDate:true,autoGenerateTitles:false,branding:"",sections:["Cover Page","Executive Summary","Findings","Corrective Actions","Evidence Index","Sign-Off"]})}
                    style={{ display:"flex", alignItems:"center", gap:6, background:"none", border:"none", cursor:"pointer", fontSize:13, color:"#8A6A4E", fontFamily:"inherit" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.48"/></svg>
                    Reset to defaults
                  </button>
                  <div style={{ display:"flex", gap:10 }}>
                    {reportStep>1&&<button onClick={()=>setReportStep(reportStep-1)} style={{ display:"flex", alignItems:"center", gap:6, padding:"9px 20px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#4A3624" }}>‹ Back</button>}
                    {reportStep<5
                      ?<button onClick={()=>setReportStep(reportStep+1)} style={{ padding:"9px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Next ›</button>
                      :<button onClick={async()=>{ if(!newReport.name)return; try{ const r=await fetch(`${API}/api/admin/profiles`,{method:"POST",headers:authHeader(),body:JSON.stringify({kind:"report",name:newReport.name,data:{sections:newReport.sections,branding:newReport.branding||null,usedBy:0}})}); const d=await r.json(); if(d.success){ setReportProfiles(prev=>[...prev,{id:d.data.id,name:newReport.name,sections:newReport.sections,branding:newReport.branding||null,usedBy:0}]); setShowAddReport(false);} }catch(e){alert("Error");} }} style={{ display:"flex", alignItems:"center", gap:7, padding:"9px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        Save Profile
                      </button>
                    }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SESSIONS */}
      {activePage==="sessions"&&!selectedSession&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>{ setUserMenuOpen(false); setSessionStatusOpen(false); setSessionInspectorOpen(false); setSessionFleetOpen(false); setSessionVesselOpen(false); }}>
          <TopBar/>
          <div style={{ padding:"28px" }}>
            {/* HOW TO USE */}
            <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <button onClick={()=>setShowHowToSessions(!showHowToSessions)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  How to use
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowToSessions?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
              </button>
              {showHowToSessions&&(
                <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>
                  <div style={{ marginTop:20, marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>What this page is for</p>
                    <p style={{ fontSize:14, color:"#4A3624", lineHeight:1.7 }}>Track live inspection Sessions and view details of completed or in-progress sessions. A session is the actual inspection run where answers and evidence are captured.</p>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Typical workflow</p>
                    <ol style={{ margin:0, paddingLeft:20 }}>{["Session is created when the inspector starts an assignment.","Answers and evidence are captured (even offline).","Inspector submits → AI/scoring processing → report generation → review/signoff."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ol>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Key things on this page</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{[["Status","— In Progress / Submitted / Processing / Reviewed / Report Generated."],["Profiles pinned to session","— shows which profiles were used (for audit)."],["Evidence","— photos and videos attached to questions and findings."]].map(([k,v],i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> {v}</li>)}</ul>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Examples</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{['"Session submitted but waiting for connectivity sync"','"Session flagged for review due to critical items"'].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5 }}>{t}</li>)}</ul>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Best practice</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{["Use the session timeline and missing-evidence indicators to speed up reviews.","Check the processing status badges to see what's still pending."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ul>
                  </div>
                  <div style={{ background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:10, padding:"14px 18px", marginBottom:14 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><span style={{ fontSize:13, fontWeight:700, color:P }}>Template vs Assignment vs Session</span></div>
                    {[["Template","the blueprint / program design."],["Assignment","a planned job: inspector + vessel + due date."],["Session","the actual inspection run where answers and evidence are captured, synced, scored, and reported."]].map(([k,v])=><div key={k} style={{ fontSize:13, color:"#4A3624", marginBottom:4, lineHeight:1.6 }}><strong>{k}</strong> — {v}</div>)}
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Need help? Open in full view</div>
                </div>
              )}
            </div>

            <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Sessions</h1>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>All inspection sessions</p>

            {/* Filters row */}
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12, flexWrap:"wrap" }}>
              {[{label:sessionStatusFilter, open:sessionStatusOpen, setOpen:setSessionStatusOpen, opts:["All statuses","in_progress","report_ready","closed","submitted"], setVal:setSessionStatusFilter},
                {label:sessionInspectorFilter, open:sessionInspectorOpen, setOpen:setSessionInspectorOpen, opts:["All inspectors","Ramya Poojary"], setVal:setSessionInspectorFilter},
                {label:sessionFleetFilter, open:sessionFleetOpen, setOpen:setSessionFleetOpen, opts:["All fleets",...fleets.map(f=>f.name)], setVal:setSessionFleetFilter},
                {label:sessionVesselFilter, open:sessionVesselOpen, setOpen:setSessionVesselOpen, opts:["All vessels",...vessels.map(v=>v.name)], setVal:setSessionVesselFilter},
              ].map(({label,open,setOpen,opts,setVal},i)=>(
                <div key={i} style={{ position:"relative" }} onClick={e=>e.stopPropagation()}>
                  <button onClick={e=>{ e.stopPropagation(); setOpen(!open); [setSessionStatusOpen,setSessionInspectorOpen,setSessionFleetOpen,setSessionVesselOpen].forEach((fn,j)=>j!==i&&fn(false)); }} style={{ display:"flex", alignItems:"center", gap:8, background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", fontSize:14, color:"#4A3624", cursor:"pointer", fontFamily:"inherit", minWidth:130 }}>
                    <span style={{ flex:1 }}>{label}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  {open&&<div style={{ position:"absolute", top:44, left:0, background:"#FDF8ED", border:"1px solid #E8D9C0", borderRadius:10, boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:300, minWidth:160, overflow:"hidden" }}>
                    {opts.map(opt=><div key={opt} onClick={()=>{ setVal(opt); setOpen(false); }} style={{ padding:"10px 16px", fontSize:14, color:"#2E1F12", cursor:"pointer" }} onMouseOver={e=>e.currentTarget.style.background="#F7EFE0"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>{opt}</div>)}
                  </div>}
                </div>
              ))}
              <input type="date" value={sessionDateFrom} onChange={e=>setSessionDateFrom(e.target.value)} style={{ ...inputStyle, width:"auto", padding:"9px 14px" }}/>
              <input type="date" value={sessionDateTo} onChange={e=>setSessionDateTo(e.target.value)} style={{ ...inputStyle, width:"auto", padding:"9px 14px" }}/>
            </div>

            {/* Search */}
            <div style={{ maxWidth:440, display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:10, marginBottom:16 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input value={sessionSearch} onChange={e=>setSessionSearch(e.target.value)} placeholder="Search..." style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
            </div>

            {/* Table */}
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["VESSEL","FLEET","INSPECTOR","TEMPLATE","DATE","STATUS"].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:700, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
                <tbody>
                  {sessionsList.filter(s=>{
                    const matchSearch=!sessionSearch||(s.vessel||"").toLowerCase().includes(sessionSearch.toLowerCase());
                    const matchStatus=sessionStatusFilter==="All statuses"||s.status===sessionStatusFilter;
                    const matchInspector=sessionInspectorFilter==="All inspectors"||s.inspector===sessionInspectorFilter;
                    return matchSearch&&matchStatus&&matchInspector;
                  }).length===0
                    ?<tr><td colSpan={6}><EmptyState msg="No active sessions. Sessions appear when inspectors start inspections."/></td></tr>
                    :sessionsList.filter(s=>{
                    const matchSearch=!sessionSearch||(s.vessel||"").toLowerCase().includes(sessionSearch.toLowerCase());
                    const matchStatus=sessionStatusFilter==="All statuses"||s.status===sessionStatusFilter;
                    const matchInspector=sessionInspectorFilter==="All inspectors"||s.inspector===sessionInspectorFilter;
                    return matchSearch&&matchStatus&&matchInspector;
                  }).map(s=>(
                    <tr key={s.id} style={{ borderBottom:"1px solid #f9fafb", cursor:"pointer" }} onClick={()=>{ setSelectedSession(s); setSessionTab("Overview"); setSessionDetail(null); fetch(`${API}/api/admin/sessions/${s.id}/detail`,{headers:authHeader()}).then(r=>r.json()).then(d=>{ if(d.success) setSessionDetail(d.data); }).catch(()=>{}); }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                      <td style={{ padding:"14px 16px" }}><span style={{ fontWeight:600, color:"#2E1F12" }}>{s.vessel||"—"}</span></td>
                      <td style={{ padding:"14px 16px", color:"#4A3624" }}>{s.fleet||"—"}</td>
                      <td style={{ padding:"14px 16px", color:"#4A3624" }}>{s.inspector||"—"}</td>
                      <td style={{ padding:"14px 16px", color:"#4A3624" }}>{s.template||"—"}</td>
                      <td style={{ padding:"14px 16px", color:"#4A3624", whiteSpace:"nowrap" }}>{s.started_at?new Date(s.started_at).toLocaleDateString("en-GB"):"—"}</td>
                      <td style={{ padding:"14px 16px" }}><span style={{ background:"#F3E7D3", color:"#4A3624", borderRadius:6, padding:"3px 10px", fontSize:12, fontWeight:600 }}>{s.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SESSION DETAIL */}
      {activePage==="sessions"&&selectedSession&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }}>
          <TopBar/>
          <div style={{ padding:"28px" }}>
            {/* Header */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
              <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                <span onClick={()=>setSelectedSession(null)} style={{ cursor:"pointer", fontSize:20, color:"#4A3624" }}>←</span>
                <div>
                  <h1 style={{ fontSize:24, fontWeight:800, color:"#2E1F12", marginBottom:3 }}>Session #{selectedSession.id}</h1>
                  <div style={{ fontSize:14, color:"#8A6A4E" }}>{selectedSession.vessel} · {selectedSession.inspector}</div>
                </div>
              </div>
              <div style={{ display:"flex", gap:10 }}>
                <button onClick={()=>alert(`Session #${selectedSession.id} processing triggered.`)} style={{ padding:"9px 18px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#4A3624" }}>Force Process</button>
                <button onClick={()=>{ if(confirm("Close this session?")){ alert("Session closed."); setSelectedSession(null);} }} style={{ padding:"9px 18px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#4A3624" }}>Close Session</button>
                <button onClick={()=>alert("Report generation is automatic on inspection submit. Check the Reports page.")} style={{ padding:"9px 18px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:13, fontWeight:500, cursor:"pointer", fontFamily:"inherit", color:"#4A3624", display:"flex", alignItems:"center", gap:6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
                  Generate Report
                </button>
                <button onClick={()=>{ setActivePage("reports"); setSelectedSession(null); }} style={{ padding:"9px 18px", background:P, border:"none", borderRadius:8, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#fff", display:"flex", alignItems:"center", gap:6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  View Report
                </button>
              </div>
            </div>

            {/* Processing Status */}
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"20px 24px", marginBottom:20, boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:14 }}>Processing Status</p>
              <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                {["Sync: pending","AI Analysis: pending","Report: pending"].map(s=>(
                  <span key={s} style={{ display:"flex", alignItems:"center", gap:6, background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:20, padding:"5px 14px", fontSize:13, color:"#4A3624" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div style={{ display:"flex", borderBottom:"2px solid #E8D9C0", marginBottom:20 }}>
              {["Overview","Questions","Evidence","AI Flags (pre-review)"].map(tab=>(
                <button key={tab} onClick={()=>setSessionTab(tab)} style={{ padding:"12px 20px", background:"none", border:"none", borderBottom:sessionTab===tab?"2px solid #111":"2px solid transparent", marginBottom:"-2px", fontSize:14, fontWeight:sessionTab===tab?600:400, color:sessionTab===tab?"#2E1F12":"#8A6A4E", cursor:"pointer", fontFamily:"inherit" }}>{tab}</button>
              ))}
            </div>

            {/* Overview Tab */}
            {sessionTab==="Overview"&&(
              <div style={{ background:"#FDF8ED", borderRadius:12, padding:"24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:16 }}>Assignment Context</p>
                {[["Vessel",selectedSession.vessel],["Fleet",selectedSession.fleet||"—"],["Template",selectedSession.template],["Due",selectedSession.date],["Timeline",`Created: ${selectedSession.date} · Submitted: —`]].map(([k,v])=>(
                  <div key={k} style={{ display:"grid", gridTemplateColumns:"160px 1fr", padding:"11px 0", borderTop:"1px solid #f3f4f6" }}>
                    <span style={{ fontSize:14, color:"#B59D7E" }}>{k}</span>
                    <span style={{ fontSize:14, color:"#2E1F12" }}>{v}</span>
                  </div>
                ))}
              </div>
            )}
            {sessionTab==="Questions"&&(
              <div style={{ background:"#FDF8ED", borderRadius:12, padding:"24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                {!sessionDetail||sessionDetail.questions.length===0
                  ?<div style={{ textAlign:"center", color:"#B59D7E" }}>No questions data available yet.</div>
                  :sessionDetail.questions.map((q,i)=>(
                    <div key={i} style={{ padding:"14px 0", borderBottom:i<sessionDetail.questions.length-1?"1px solid #f3f4f6":"none" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12 }}>
                        <div style={{ flex:1 }}>
                          <div style={{ fontSize:12, fontWeight:700, color:"#1a2a5e", marginBottom:4 }}>Q {q.id}</div>
                          <div style={{ fontSize:14, color:"#2E1F12", fontWeight:600 }}>{q.question}</div>
                          {q.comment&&<div style={{ fontSize:13, color:"#8A6A4E", marginTop:4 }}>{q.comment}</div>}
                        </div>
                        <span style={{ background:q.answer==="yes"?"#dcfce7":q.answer==="no"?"#fee2e2":"#F3E7D3", color:q.answer==="yes"?"#166534":q.answer==="no"?"#991b1b":"#4A3624", borderRadius:6, padding:"4px 12px", fontSize:12, fontWeight:700, textTransform:"uppercase", whiteSpace:"nowrap" }}>{q.answer||"—"}</span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
            {sessionTab==="Evidence"&&(
              <div style={{ background:"#FDF8ED", borderRadius:12, padding:"24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                {!sessionDetail||sessionDetail.evidence.length===0
                  ?<div style={{ textAlign:"center", color:"#B59D7E" }}>No evidence uploaded yet.</div>
                  :<div style={{ display:"flex", flexWrap:"wrap", gap:16 }}>
                    {sessionDetail.evidence.map((e,i)=>(
                      <div key={i} style={{ width:180, border:"1px solid #E8D9C0", borderRadius:8, overflow:"hidden" }}>
                        <img src={e.url} alt="evidence" style={{ width:"100%", height:140, objectFit:"cover", display:"block" }}/>
                        <div style={{ padding:"8px 10px", fontSize:12, color:"#8A6A4E" }}>Q {e.question_id}</div>
                      </div>
                    ))}
                  </div>}
              </div>
            )}
            {sessionTab==="AI Flags (pre-review)"&&(
              <div style={{ background:"#FDF8ED", borderRadius:12, padding:"24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                {!sessionDetail||sessionDetail.findings===0
                  ?<div style={{ textAlign:"center", color:"#B59D7E" }}>No findings flagged.</div>
                  :sessionDetail.questions.filter(q=>q.is_finding).map((q,i)=>(
                    <div key={i} style={{ padding:"12px 0", borderBottom:"1px solid #f3f4f6", display:"flex", alignItems:"center", gap:10 }}>
                      <span style={{ background:"#fee2e2", color:"#991b1b", borderRadius:6, padding:"3px 10px", fontSize:12, fontWeight:700 }}>Finding</span>
                      <span style={{ fontSize:14, color:"#2E1F12" }}>{q.question}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* REVIEW QUEUE LIST */}
      {activePage==="reviewqueue"&&!selectedReview&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>setUserMenuOpen(false)}>
          <TopBar/>
          <div style={{ padding:"28px" }}>
            <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <button onClick={()=>setShowHowToReview(!showHowToReview)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  How to use
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowToReview?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
              </button>
              {showHowToReview&&(
                <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>
                  <div style={{ marginTop:20, marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>What this page is for</p>
                    <p style={{ fontSize:14, color:"#4A3624", lineHeight:1.7 }}>Inspections that need your review before they can be approved and finalised. Sessions appear here when AI flags issues (e.g. low confidence, fail outcomes) or when the template requires manual sign-off.</p>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Typical workflow</p>
                    <ol style={{ margin:0, paddingLeft:20 }}>{["Open a session from the queue.","Review AI-flagged items and evidence.","Add findings and corrective actions where needed.","Approve the session when satisfied — this triggers report generation."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ol>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Key things on this page</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{[["AI Flags","— number of items flagged for review (fail or low confidence)."],["Fail badge","— at least one AI outcome is \"fail\"."],["Submitted","— when the inspector submitted the session."]].map(([k,v],i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> {v}</li>)}</ul>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Best practice</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{["Review critical and high-severity items first.","Attach corrective actions from the library when a finding is confirmed."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ul>
                  </div>
                  <div style={{ background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:10, padding:"14px 18px", marginBottom:14 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><span style={{ fontSize:13, fontWeight:700, color:P }}>Template vs Assignment vs Session</span></div>
                    {[["Template","the blueprint / program design."],["Assignment","a planned job: inspector + vessel + due date."],["Session","the actual inspection run where answers and evidence are captured, synced, scored, and reported."]].map(([k,v])=><div key={k} style={{ fontSize:13, color:"#4A3624", marginBottom:4, lineHeight:1.6 }}><strong>{k}</strong> — {v}</div>)}
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Need help? Open in full view</div>
                </div>
              )}
            </div>

            <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Review Queue</h1>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>Sessions pending review and approval</p>
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["SESSION","VESSEL","INSPECTOR","SUBMITTED","AI FLAGS","STATUS",""].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:700, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
                <tbody>
                  {reviewReports.length===0
                    ?<tr><td colSpan={7}><EmptyState msg="No sessions pending review. When inspectors submit inspections, they'll appear here for approval."/></td></tr>
                    :reviewReports.map(r=>(
                      <tr key={r.id} style={{ borderBottom:"1px solid #f9fafb", cursor:"pointer" }} onClick={()=>setSelectedReview(r)} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                        <td style={{ padding:"14px 16px", fontWeight:600, color:"#2E1F12" }}>Report #{r.id}</td>
                        <td style={{ padding:"14px 16px" }}><span style={{ fontWeight:500, color:"#2E1F12" }}>{r.vessel||"—"}</span></td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{r.inspector||"—"}</td>
                        <td style={{ padding:"14px 16px", color:"#4A3624" }}>{r.created_at?new Date(r.created_at).toLocaleDateString("en-GB"):"—"}</td>
                        <td style={{ padding:"14px 16px" }}><span style={{ background:"#fef2f2", color:"#ef4444", borderRadius:6, padding:"3px 10px", fontSize:12, fontWeight:600 }}>{r.findings_count||0} findings</span></td>
                        <td style={{ padding:"14px 16px" }}><span style={{ background:"#fef3c7", color:"#92400e", borderRadius:6, padding:"3px 10px", fontSize:12, fontWeight:600 }}>{r.status}</span></td>
                        <td style={{ padding:"14px 16px", textAlign:"right" }}>
                          <button onClick={async e=>{ e.stopPropagation(); if(!confirm("Approve this report?"))return; try{ await fetch(`${API}/api/admin/reports/${r.id}/review`,{method:"PATCH",headers:authHeader(),body:JSON.stringify({status:"approved"})}); setReviewReports(prev=>prev.filter(x=>x.id!==r.id)); setApprovedReports(prev=>[...prev,{...r,status:"approved"}]); }catch(err){alert("Error");} }} style={{ background:P, color:"#fff", border:"none", borderRadius:7, cursor:"pointer", fontSize:13, fontWeight:600, padding:"6px 14px", fontFamily:"inherit" }}>Approve</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* REVIEW DETAIL */}
      {activePage==="reviewqueue"&&selectedReview&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }}>
          <TopBar/>
          <div style={{ padding:"28px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
              <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                <span onClick={()=>setSelectedReview(null)} style={{ cursor:"pointer", fontSize:20, color:"#4A3624" }}>←</span>
                <div>
                  <h1 style={{ fontSize:24, fontWeight:800, color:"#2E1F12", marginBottom:3 }}>Review Session #{selectedReview.id}</h1>
                  <div style={{ fontSize:14, color:"#8A6A4E" }}>{selectedReview.vessel} · {selectedReview.inspector}</div>
                </div>
              </div>
              <div style={{ display:"flex", gap:10 }}>
                <button style={{ padding:"9px 18px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:13, fontWeight:500, cursor:"pointer", fontFamily:"inherit", color:"#B59D7E", display:"flex", alignItems:"center", gap:6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
                  Generate Report
                </button>
                <button style={{ padding:"9px 22px", background:P, border:"none", borderRadius:8, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff", display:"flex", alignItems:"center", gap:6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  Approve
                </button>
              </div>
            </div>
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:16 }}>Items needing review</p>
              {(selectedReview.items||[
                {id:1, question:"Provide a written observation describing housekeeping standards within deck cargo operation areas.", confidence:50, status:"uncertain"},
                {id:2, question:"Measure and record the available working space around cargo manifold areas.", confidence:45, status:"uncertain"},
              ]).map(item=>(
                <div key={item.id} style={{ border:"1px solid #E8D9C0", borderRadius:10, padding:"18px 20px", marginBottom:14 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
                    <p style={{ fontSize:14, color:"#2E1F12", lineHeight:1.6, margin:0, flex:1, paddingRight:16 }}>{item.question}</p>
                    <span style={{ background:"#F3E7D3", color:"#4A3624", borderRadius:6, padding:"3px 10px", fontSize:12, fontWeight:600, flexShrink:0 }}>{item.status}</span>
                  </div>
                  <div style={{ display:"flex", gap:8, marginBottom:14 }}>
                    {[1,2].map(n=><div key={n} style={{ width:90, height:70, background:"#F7EFE0", border:"1px solid #E8D9C0", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DECBAB" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>)}
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10, padding:"8px 12px", background:"#F7EFE0", borderRadius:8 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span style={{ fontSize:13, color:"#4A3624" }}>AI Confidence: {item.confidence}%</span>
                    <span style={{ background:"#fef2f2", color:"#ef4444", borderRadius:6, padding:"2px 8px", fontSize:11, fontWeight:600 }}>Low confidence</span>
                  </div>
                  <p style={{ fontSize:12, color:"#B59D7E", marginBottom:12 }}>AI analysis unavailable</p>
                  <button style={{ display:"flex", alignItems:"center", gap:7, background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"8px 16px", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#4A3624" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    Add corrective action
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CAPA TRACKER */}
      {activePage==="capatracker"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>setUserMenuOpen(false)}>
          <TopBar/>
          <div style={{ padding:"28px" }}>
            {/* HOW TO USE */}
            <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <button onClick={()=>setShowHowToCapa(!showHowToCapa)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  How to use
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowToCapa?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
              </button>
              {showHowToCapa&&(
                <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>
                  <div style={{ marginTop:20, marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>What this page is for</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{["Track corrective actions issued from inspections — open, in progress, completed, or verified.","Different from the Library: this page shows real issued actions tied to vessels and sessions.","Use it to manage fleet-wide CAPA and ensure fixes are completed."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ul>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Typical workflow</p>
                    <ol style={{ margin:0, paddingLeft:20 }}>{["Filter by status, fleet, vessel, severity, or overdue.","Create actions from the Library (preferred) or write custom ones.","Assign owners and set due dates.","Update status as work progresses (Open → In Progress → Completed → Verified)."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ol>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Key things on this page</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{[["From Library","— pick a template from the Corrective Actions Library; title/description auto-fill."],["Custom","— write a one-off action not in the library."],["Overdue","— toggle to show only overdue items."],["Session link","— jump to the inspection session that created the action."]].map(([k,v],i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> {v}</li>)}</ul>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Best practice</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{["Prefer creating from the Library to keep wording consistent.","Use the overdue filter to prioritise fleet-wide follow-up."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ul>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Need help? Open in full view</div>
                </div>
              )}
            </div>

            {/* Title + Create */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
              <div><h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>CAPA Tracker</h1><p style={{ fontSize:14, color:"#8A6A4E", margin:0 }}>Corrective and preventive actions</p></div>
              <button onClick={()=>setShowCreateCapa(true)} style={{ display:"flex", alignItems:"center", gap:8, background:P, color:"#fff", border:"none", borderRadius:8, padding:"10px 22px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>+ Create action</button>
            </div>

            {/* Filters */}
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12, flexWrap:"wrap" }}>
              {[{label:capaStatusFilter, opts:["All statuses","Open","In Progress","Completed","Verified"], set:setCapaStatusFilter},
                {label:capaFleetFilter, opts:["All fleets",...fleets.map(f=>f.name)], set:setCapaFleetFilter},
                {label:capaVesselFilter, opts:["All vessels",...vessels.map(v=>v.name)], set:setCapaVesselFilter},
                {label:capaSeverityFilter, opts:["All","Critical","Major","Minor","Info"], set:setCapaSeverityFilter},
              ].map(({label,opts,set},i)=>(
                <select key={i} value={label} onChange={e=>set(e.target.value)} style={{ ...inputStyle, width:"auto", padding:"9px 14px", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", paddingRight:36, cursor:"pointer" }}>
                  {opts.map(o=><option key={o}>{o}</option>)}
                </select>
              ))}
              <label style={{ display:"flex", alignItems:"center", gap:8, fontSize:14, color:"#4A3624", cursor:"pointer" }}>
                <input type="radio" checked={capaOverdueOnly} onChange={()=>setCapaOverdueOnly(!capaOverdueOnly)} style={{ accentColor:P }}/>
                Overdue only
              </label>
            </div>

            {/* Search + per page */}
            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:12 }}>
              <div style={{ maxWidth:440, flex:1, display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:10 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input value={capaSearch} onChange={e=>setCapaSearch(e.target.value)} placeholder="Search..." style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:8, fontSize:14, color:"#4A3624" }}>
                <span>Show</span>
                <select value={capaPerPage} onChange={e=>setCapaPerPage(Number(e.target.value))} style={{ ...inputStyle, width:"auto", padding:"6px 12px" }}>
                  {[10,25,50].map(n=><option key={n}>{n}</option>)}
                </select>
                <span>per page</span>
              </div>
            </div>

            {/* Table */}
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["TITLE","VESSEL","FLEET","SEVERITY","STATUS","DUE DATE","SESSION","ASSIGNEE",""].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 14px", color:"#8A6A4E", fontWeight:700, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
                <tbody>
                  {capaList.filter(a=>{ const ms=!capaSearch||(a.finding||"").toLowerCase().includes(capaSearch.toLowerCase()); const mst=capaStatusFilter==="All statuses"||a.status===capaStatusFilter; return ms&&mst; }).length===0
                    ?<tr><td colSpan={9}><EmptyState msg="No CAPA actions yet. CAPAs auto-create from inspection findings, or add manually."/></td></tr>
                    :capaList.filter(a=>{ const ms=!capaSearch||(a.finding||"").toLowerCase().includes(capaSearch.toLowerCase()); const mst=capaStatusFilter==="All statuses"||a.status===capaStatusFilter; return ms&&mst; }).map(a=>(
                      <tr key={a.id} style={{ borderBottom:"1px solid #f9fafb" }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                        <td style={{ padding:"13px 14px", fontWeight:600, color:"#2E1F12" }}>{a.finding||a.question_text||"—"}</td>
                        <td style={{ padding:"13px 14px", color:"#4A3624" }}>—</td>
                        <td style={{ padding:"13px 14px", color:"#4A3624" }}>—</td>
                        <td style={{ padding:"13px 14px" }}>
                          <span style={{ background:"#F3E7D3", color:"#4A3624", borderRadius:20, padding:"3px 10px", fontSize:12, fontWeight:600, border:"1px solid #E8D9C0" }}>—</span>
                        </td>
                        <td style={{ padding:"13px 14px" }}><span style={{ background:a.status==="closed"?"#dcfce7":a.status==="in_progress"?"#fef3c7":"#fef2f2", color:a.status==="closed"?"#166534":a.status==="in_progress"?"#92400e":"#991b1b", borderRadius:20, padding:"4px 12px", fontSize:12, fontWeight:600 }}>{a.status}</span></td>
                        <td style={{ padding:"13px 14px", color:"#4A3624" }}>{a.due_date?new Date(a.due_date).toLocaleDateString("en-GB"):"—"}</td>
                        <td style={{ padding:"13px 14px", color:P, fontSize:13 }}>—</td>
                        <td style={{ padding:"13px 14px", color:"#4A3624" }}>—</td>
                        <td style={{ padding:"13px 14px", textAlign:"right" }}>
                          <select value={a.status} onChange={async e=>{ const newStatus=e.target.value; try{ await fetch(`${API}/api/admin/capas/${a.id}`,{method:"PATCH",headers:authHeader(),body:JSON.stringify({status:newStatus})}); setCapaList(prev=>prev.map(x=>x.id===a.id?{...x,status:newStatus}:x)); }catch(e2){alert("Error");} }} style={{ padding:"5px 10px", fontSize:12, border:"1px solid #E8D9C0", borderRadius:6, background:"#FDF8ED", cursor:"pointer" }}>
                            <option value="open">Open</option>
                            <option value="in_progress">In Progress</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {capaList.length>0&&<div style={{ padding:"10px 16px", fontSize:13, color:"#8A6A4E", borderTop:"1px solid #f3f4f6" }}>Showing 1–{Math.min(capaPerPage,capaList.length)} of {capaList.length}</div>}
            </div>
          </div>

          {/* CREATE CAPA MODAL */}
          {showCreateCapa&&(
            <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <div style={{ background:"#FDF8ED", borderRadius:16, width:"100%", maxWidth:560, maxHeight:"88vh", overflowY:"auto", boxShadow:"0 24px 64px rgba(0,0,0,0.3)" }} onClick={e=>e.stopPropagation()}>
                <div style={{ padding:"24px 28px 18px", borderBottom:"1px solid #f3f4f6", position:"relative" }}>
                  <button onClick={()=>setShowCreateCapa(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#8A6A4E" }}>✕</button>
                  <h3 style={{ fontSize:18, fontWeight:800, color:"#2E1F12", marginBottom:16 }}>Create corrective action</h3>
                  <div style={{ display:"flex", gap:8 }}>
                    {["library","custom"].map(m=>(
                      <button key={m} onClick={()=>setCapaCreateMode(m)} style={{ padding:"8px 20px", borderRadius:20, border:"none", cursor:"pointer", fontFamily:"inherit", fontSize:13, fontWeight:600, background:capaCreateMode===m?P:"#F3E7D3", color:capaCreateMode===m?"#fff":"#4A3624" }}>
                        {m==="library"?"From library":"Custom"}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ padding:"20px 28px" }}>
                  <div style={{ marginBottom:20 }}>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Session</label>
                    <select value={newCapa.session} onChange={e=>setNewCapa({...newCapa,session:e.target.value})} style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                      <option value=""/>
                      {sessions.map((s,i)=><option key={s.id} value={s.id}>#{s.id} – {s.vessel}</option>)}
                    </select>
                  </div>
                  {capaCreateMode==="library"&&(
                    <div style={{ marginBottom:20 }}>
                      <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Library template</label>
                      <select value={newCapa.libraryTemplate} onChange={e=>setNewCapa({...newCapa,libraryTemplate:e.target.value})} style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                        <option value=""/>
                        {caTemplates.map(t=><option key={t.id} value={t.title}>{t.title}</option>)}
                      </select>
                    </div>
                  )}
                  {capaCreateMode==="custom"&&(
                    <>
                      <div style={{ marginBottom:20 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Title</label>
                        <input value={newCapa.customTitle} onChange={e=>setNewCapa({...newCapa,customTitle:e.target.value})} placeholder="e.g. Fix oil leak near pump" style={inputStyle}/>
                      </div>
                      <div style={{ marginBottom:20 }}>
                        <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Description (optional)</label>
                        <textarea value={newCapa.customDesc} onChange={e=>setNewCapa({...newCapa,customDesc:e.target.value})} placeholder="Detailed steps..." rows={4} style={{ ...inputStyle, resize:"vertical" }}/>
                      </div>
                    </>
                  )}
                  <div style={{ marginBottom:20 }}>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Severity</label>
                    <select value={newCapa.severity} onChange={e=>setNewCapa({...newCapa,severity:e.target.value})} style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}>
                      <option>minor</option><option>major</option><option>critical</option><option>info</option>
                    </select>
                  </div>
                  <div style={{ marginBottom:20 }}>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Due date (optional)</label>
                    <input type="date" value={newCapa.dueDate} onChange={e=>setNewCapa({...newCapa,dueDate:e.target.value})} style={inputStyle}/>
                  </div>
                  <div style={{ marginBottom:8 }}>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624", display:"block", marginBottom:8 }}>Assignee (optional)</label>
                    <select value={newCapa.assignee} onChange={e=>setNewCapa({...newCapa,assignee:e.target.value})} style={{ ...inputStyle, background:"#FDF8ED", appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer", border:`2px solid ${P}` }}>
                      <option>Unassigned</option><option>Ramya Poojary</option><option>Capt. Rashid Al Mansoori</option>
                    </select>
                  </div>
                </div>
                <div style={{ padding:"16px 28px", borderTop:"1px solid #f3f4f6", display:"flex", gap:10, justifyContent:"flex-end" }}>
                  <button onClick={()=>setShowCreateCapa(false)} style={{ padding:"10px 22px", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#2E1F12" }}>Cancel</button>
                  <button onClick={()=>{
                    const title = capaCreateMode==="library" ? (newCapa.libraryTemplate||"Untitled") : (newCapa.customTitle||"Untitled");
                    setCapaActions(prev=>[...prev,{ id:Date.now(), title, severity:newCapa.severity.charAt(0).toUpperCase()+newCapa.severity.slice(1), status:"Open", dueDate:newCapa.dueDate, session:newCapa.session, assignee:newCapa.assignee==="Unassigned"?null:newCapa.assignee, vessel:newCapa.session?(sessions.find(s=>s.id==newCapa.session)||{}).vessel||"":null, fleet:newCapa.session?(sessions.find(s=>s.id==newCapa.session)||{}).fleet||"":null }]);
                    setShowCreateCapa(false);
                    setNewCapa({session:"",libraryTemplate:"",customTitle:"",customDesc:"",severity:"minor",dueDate:"",assignee:"Unassigned"});
                  }} style={{ padding:"10px 22px", background:P, border:"none", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", color:"#fff" }}>Create</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ANALYTICS */}
      {/* EMAIL TEMPLATES */}
      {activePage==="emailtemplates"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>setUserMenuOpen(false)}>
          <TopBar/>
          <div style={{ padding:"28px" }}>
            {/* Title */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24 }}>
              <div>
                <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:6 }}>Email Templates</h1>
                <p style={{ fontSize:14, color:"#8A6A4E", margin:0 }}>Preview and edit transactional email templates. Use placeholders like {"{{resetLink}}"} for dynamic values.</p>
              </div>
              <button style={{ display:"flex", alignItems:"center", gap:7, background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 18px", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#4A3624" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.48"/></svg>
                Fix password reset templates
              </button>
            </div>

            {/* Templates card */}
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <div style={{ padding:"20px 24px 10px", display:"flex", alignItems:"center", gap:10, borderBottom:"1px solid #f3f4f6" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={A} strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span style={{ fontSize:16, fontWeight:700, color:"#2E1F12" }}>Templates</span>
              </div>
              <div style={{ padding:"4px 24px 10px" }}>
                <p style={{ fontSize:13, color:"#8A6A4E", margin:"10px 0 16px" }}>All outgoing emails use the RightKnots layout (logo, card, footer). Preview shows a sample; Edit lets you customize subject and body.</p>
                <div style={{ display:"flex", justifyContent:"space-between", padding:"8px 0 8px", borderBottom:"1px solid #f3f4f6" }}>
                  <span style={{ fontSize:12, fontWeight:700, color:"#8A6A4E", letterSpacing:"0.05em" }}>Template</span>
                  <span style={{ fontSize:12, fontWeight:700, color:"#8A6A4E", letterSpacing:"0.05em" }}>Actions</span>
                </div>
                {["Admin password reset","Inspector password reset","Inspector invite (set password)","Admin invite (set password)","Inspection submission","Report ready","Overdue CAPA"].map(name=>(
                  <div key={name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"16px 0", borderBottom:"1px solid #f9fafb" }} onMouseOver={e=>e.currentTarget.style.background="#FBF5E9"} onMouseOut={e=>e.currentTarget.style.background="transparent"}>
                    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      <span style={{ fontSize:14, color:"#2E1F12" }}>{name}</span>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:16 }}>
                      <button onClick={()=>alert(`Preview: ${name}\n\nThis email uses the RightKnots layout with logo, card body, and footer. Configure your email service (SendGrid/SMTP) to send these.`)} style={{ display:"flex", alignItems:"center", gap:5, background:"none", border:"none", cursor:"pointer", fontSize:13, color:"#4A3624", fontFamily:"inherit", fontWeight:500 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        Preview
                      </button>
                      <button onClick={()=>alert(`Edit: ${name}\n\nEmail editing requires an email service integration (SendGrid/SMTP). This is a planned feature.`)} style={{ display:"flex", alignItems:"center", gap:5, background:"none", border:"none", cursor:"pointer", fontSize:13, color:"#4A3624", fontFamily:"inherit", fontWeight:500 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        Edit
                      </button>
                      <button style={{ display:"flex", alignItems:"center", gap:4, background:"none", border:"none", cursor:"pointer", fontSize:13, color:"#4A3624", fontFamily:"inherit" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.48"/></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activePage==="analytics"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>setUserMenuOpen(false)}>
          <TopBar/>
          <div style={{ padding:"28px" }}>
            {/* HOW TO USE */}
            <div style={{ background:"#FDF8ED", borderRadius:12, marginBottom:24, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <button onClick={()=>setShowHowToAnalytics(!showHowToAnalytics)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 22px", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, fontSize:15, fontWeight:500, color:"#4A3624" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  How to use
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2">{showHowToAnalytics?<polyline points="18 15 12 9 6 15"/>:<polyline points="6 9 12 15 18 9"/>}</svg>
              </button>
              {showHowToAnalytics&&(
                <div style={{ padding:"4px 28px 28px", borderTop:"1px solid #f3f4f6" }}>
                  <div style={{ marginTop:20, marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>What this page is for</p>
                    <p style={{ fontSize:14, color:"#4A3624", lineHeight:1.7 }}>View inspection performance insights: completed sessions, outcome distribution (Pass/Conditional/Fail), turnaround times, review queue, overdue CAPA, findings by severity, template analytics, and top vessels by various metrics.</p>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Typical workflow</p>
                    <ol style={{ margin:0, paddingLeft:20 }}>{["Select a date range (preset or custom) and optional filters (fleet, vessel, template, inspector).","Review KPI cards for completed sessions, outcome, turnaround, and CAPA.","Use charts and tables to spot trends: sessions by status, findings by severity, template performance, CAPA aging.","Switch the Top Vessels metric (findings, critical, overdue CAPA, repeat offenders) to focus on different risk areas."].map((t,i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}>{t}</li>)}</ol>
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:8 }}>Key metrics</p>
                    <ul style={{ margin:0, paddingLeft:20 }}>{[["Completed","— sessions with a report ready."],["Outcome","— Pass (no findings), Conditional (major only), Fail (any critical)."],["Turnaround","— time from submit to report ready."],["Repeat offenders","— vessels with 2+ sessions that each had at least one critical or major finding."]].map(([k,v],i)=><li key={i} style={{ fontSize:14, color:"#4A3624", marginBottom:5, lineHeight:1.6 }}><strong style={{ color:P }}>{k}</strong> {v}</li>)}</ul>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8A6A4E", fontSize:13, cursor:"pointer" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Need help? Open in full view</div>
                </div>
              )}
            </div>

            {/* Title + filter bar */}
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"16px 20px", marginBottom:20, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
              <div>
                <div style={{ fontSize:13, fontWeight:700, color:P, marginBottom:2 }}>Inspection</div>
                <div style={{ fontSize:12, color:"#8A6A4E" }}>performance</div>
                <div style={{ fontSize:12, color:"#8A6A4E" }}>insights</div>
              </div>
              <div style={{ width:1, height:40, background:"#E8D9C0", margin:"0 8px" }}/>
              {["Last 7 days","Last 30 days","Last 90 days"].map(r=>(
                <button key={r} onClick={()=>setAnalyticsRange(r)} style={{ padding:"7px 14px", borderRadius:6, border:"none", cursor:"pointer", fontFamily:"inherit", fontSize:13, fontWeight:600, background:analyticsRange===r?P:"transparent", color:analyticsRange===r?"#fff":"#4A3624" }}>{r}</button>
              ))}
              <input type="date" defaultValue="2026-02-26" style={{ ...inputStyle, width:"auto", padding:"7px 12px", fontSize:13 }}/>
              <input type="date" defaultValue="2026-03-28" style={{ ...inputStyle, width:"auto", padding:"7px 12px", fontSize:13 }}/>
              {["All Fleets","All Vessels","All Templates","All Inspectors"].map((f,i)=>(
                <select key={i} style={{ ...inputStyle, width:"auto", padding:"7px 12px", fontSize:13, appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 10px center", paddingRight:30, cursor:"pointer" }}><option>{f}</option></select>
              ))}
            </div>

            {/* KPI Cards */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:16, marginBottom:20 }}>
              {[
                { title:"Total Vessels", icon:"🚢", value:analyticsData?.totals?.vessels ?? 0, sub:"In fleet" },
                { title:"Assignments", icon:"📋", value:analyticsData?.totals?.assignments ?? 0, sub:"Total created" },
                { title:"Reports", icon:"📄", value:analyticsData?.totals?.reports ?? 0, sub:"Generated" },
                { title:"Open CAPAs", icon:"⚠", value:analyticsData?.capa_by_status?.open ?? 0, sub:"Need action" },
              ].map((k,i)=>(
                <div key={i} style={{ background:"#FDF8ED", borderRadius:12, padding:"20px 22px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                    <span style={{ fontSize:14 }}>{k.icon}</span>
                    <span style={{ fontSize:14, fontWeight:600, color:"#4A3624" }}>{k.title}</span>
                  </div>
                  {k.value!==null && <div style={{ fontSize:28, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>{k.value}</div>}
                  {k.sub&&<div style={{ fontSize:12, color:"#B59D7E" }}>{k.sub}</div>}
                  {k.pass!==undefined&&<div style={{ fontSize:14 }}><span style={{ color:"#16a34a", fontWeight:600 }}>Pass: {k.pass}</span><br/><span style={{ color:"#d97706", fontWeight:600 }}>Conditional: {k.cond}</span><br/><span style={{ color:"#ef4444", fontWeight:600 }}>Fail: {k.fail}</span></div>}
                  {k.reviewQ!==undefined&&<div style={{ fontSize:14, color:"#4A3624" }}><div>Review queue: {k.reviewQ}</div><div>Overdue CAPA: {k.overdueCapa}</div></div>}
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:20 }}>
              {/* Sessions by Status */}
              <div style={{ background:"#FDF8ED", borderRadius:12, padding:"22px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:16 }}>Sessions by Status</p>
                {sessions.length===0?<div style={{ textAlign:"center", color:"#B59D7E", fontSize:13, padding:"24px 0" }}>No data yet</div>:(
                  <div>
                    {Object.entries(sessions.reduce((acc,s)=>{ acc[s.status]=(acc[s.status]||0)+1; return acc; },{})).map(([status,count])=>{
                      const max=Math.max(...Object.values(sessions.reduce((a,s)=>{ a[s.status]=(a[s.status]||0)+1; return a; },{})));
                      return(
                        <div key={status} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                          <span style={{ fontSize:12, color:"#8A6A4E", width:90, textAlign:"right", flexShrink:0 }}>{status}</span>
                          <div style={{ flex:1, background:"#F3E7D3", borderRadius:4, height:18 }}>
                            <div style={{ width:`${(count/max)*100}%`, background:P, height:18, borderRadius:4 }}/>
                          </div>
                          <span style={{ fontSize:12, color:"#4A3624", width:20 }}>{count}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              {/* Findings by Severity */}
              <div style={{ background:"#FDF8ED", borderRadius:12, padding:"22px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:16 }}>Findings by Severity</p>
                <div style={{ display:"flex", alignItems:"flex-end", gap:20, height:100, padding:"0 10px" }}>
                  {["critical","major","minor","info"].map(s=>{
                    const count=capaList.filter(a=>a.severity?.toLowerCase()===s).length;
                    const max=Math.max(1,...["critical","major","minor","info"].map(x=>capaList.filter(a=>a.severity?.toLowerCase()===x).length));
                    return(
                      <div key={s} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
                        <div style={{ width:"100%", background:count>0?P:"#E8D9C0", height:`${Math.max(8,(count/max)*80)}px`, borderRadius:"4px 4px 0 0" }}/>
                        <span style={{ fontSize:11, color:"#8A6A4E" }}>{s}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Template Analytics */}
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"22px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)", marginBottom:20 }}>
              <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:16 }}>Template Analytics</p>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["Template","Version","Sessions","Findings/Session","Critical Rate %"].map(h=><th key={h} style={{ textAlign:"left", padding:"10px 14px", color:"#8A6A4E", fontWeight:600, fontSize:12 }}>{h}</th>)}</tr></thead>
                <tbody>
                  {templates.length===0?<tr><td colSpan={5} style={{ padding:"20px", textAlign:"center", color:"#B59D7E", fontSize:13 }}>No template data yet</td></tr>
                  :templates.map(t=>(
                    <tr key={t.id} style={{ borderBottom:"1px solid #f9fafb" }}>
                      <td style={{ padding:"12px 14px", color:"#2E1F12" }}>{t.name}</td>
                      <td style={{ padding:"12px 14px", color:"#4A3624" }}>{t.version||"—"}</td>
                      <td style={{ padding:"12px 14px", color:"#4A3624" }}>0</td>
                      <td style={{ padding:"12px 14px", color:"#4A3624" }}>0.0</td>
                      <td style={{ padding:"12px 14px", color:"#4A3624" }}>0.0%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CAPA Status + Top Vessels */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              <div style={{ background:"#FDF8ED", borderRadius:12, padding:"22px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:16 }}>CAPA Status</p>
                {[["Verified",capaList.filter(a=>a.status==="Verified").length],["Open",capaList.filter(a=>a.status==="Open").length],["In Progress",capaList.filter(a=>a.status==="In Progress").length]].map(([label,count])=>(
                  <div key={label} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderTop:"1px solid #f3f4f6" }}>
                    <span style={{ fontSize:14, color:"#4A3624" }}>{label}</span>
                    <span style={{ fontSize:14, fontWeight:700, color:"#2E1F12" }}>{count}</span>
                  </div>
                ))}
                <div style={{ marginTop:8, fontSize:13, color:"#ef4444" }}>Overdue: 0</div>
                {["0-7 days: 0","8-30 days: 0","31-90 days: 0","90+ days: 0"].map((t,i)=><div key={i} style={{ fontSize:12, color:"#B59D7E", marginTop:2 }}>{t}</div>)}
              </div>
              <div style={{ background:"#FDF8ED", borderRadius:12, padding:"22px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
                  <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", margin:0 }}>Top Vessels</p>
                  <select value={topVesselsMetric} onChange={e=>setTopVesselsMetric(e.target.value)} style={{ ...inputStyle, width:"auto", padding:"5px 10px", fontSize:12, appearance:"none", backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat:"no-repeat", backgroundPosition:"right 8px center", paddingRight:24, cursor:"pointer" }}>
                    <option>Findings</option><option>Critical</option><option>Overdue CAPA</option>
                  </select>
                </div>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
                  <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["Vessel","Fleet","Count"].map(h=><th key={h} style={{ textAlign:"left", padding:"8px 10px", color:"#8A6A4E", fontWeight:600, fontSize:11 }}>{h}</th>)}</tr></thead>
                  <tbody>
                    {vessels.length===0?<tr><td colSpan={3} style={{ padding:"16px", textAlign:"center", color:"#B59D7E", fontSize:12 }}>No vessel data yet</td></tr>
                    :vessels.slice(0,5).map(v=>(
                      <tr key={v.id} style={{ borderBottom:"1px solid #f9fafb" }}>
                        <td style={{ padding:"10px" }}>{v.name} <span style={{ fontSize:11, color:"#B59D7E" }}>({v.imo})</span></td>
                        <td style={{ padding:"10px", color:"#8A6A4E" }}>{fleets.find(f=>f.name===v.fleet)?.name||"—"}</td>
                        <td style={{ padding:"10px", color:"#4A3624", fontWeight:600 }}>0</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PLATFORM THEME */}
      {activePage==="platformtheme"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>setUserMenuOpen(false)}>
          <TopBar/>
          <div style={{ padding:"28px" }}>
            <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:6 }}>Platform Theme</h1>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:24 }}>Customise brand colours, logo sizing, and typography across all portals</p>

            {/* COLOUR PALETTE */}
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)", marginBottom:20 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
                <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ width:36, height:36, background:"#F2EBDD", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><circle cx="13.5" cy="6.5" r="0.5" fill="#4A3624"/><circle cx="17.5" cy="10.5" r="0.5" fill="#4A3624"/><circle cx="8.5" cy="7.5" r="0.5" fill="#4A3624"/><circle cx="6.5" cy="12.5" r="0.5" fill="#4A3624"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
                  </div>
                  <div>
                    <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:2 }}>Colour Palette</p>
                    <p style={{ fontSize:13, color:"#8A6A4E", margin:0 }}>Choose your brand colours — applies across all portals</p>
                  </div>
                </div>
                <button style={{ display:"flex", alignItems:"center", gap:6, background:"none", border:"none", cursor:"pointer", fontSize:13, color:"#4A3624", fontFamily:"inherit" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.48"/></svg>
                  Reset All
                </button>
              </div>

              {/* Palette grid */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16, marginBottom:24 }}>
                {[
                  {name:"Navy & Orange", desc:"Default brand palette — deep navy primary with vibrant orange accent", p:[358,55,22], a:[18,100,58], pc:P, ac:A},
                  {name:"Ocean & Coral", desc:"Cool ocean blue with warm coral highlights", p:[200,70,25], a:[8,85,58], pc:"#0e4d6e", ac:"#e05a3a"},
                  {name:"Forest & Gold", desc:"Deep forest green with golden amber accent", p:[160,45,20], a:[38,92,52], pc:"#1a4d2e", ac:"#e8a020"},
                  {name:"Slate & Violet", desc:"Neutral slate with vivid violet highlights", p:[220,15,25], a:[262,80,58], pc:"#383d44", ac:"#7c3aed"},
                  {name:"Midnight & Teal", desc:"Dark midnight blue with bright teal accent", p:[235,50,18], a:[174,72,48], pc:"#151f3d", ac:"#1a9e8e"},
                  {name:"Charcoal & Rose", desc:"Warm charcoal base with soft rose accents", p:[210,8,22], a:[350,72,58], pc:"#313539", ac:"#e0445a"},
                ].map(palette=>(
                  <div key={palette.name} onClick={()=>setSelectedPalette(palette.name)} style={{ border:`2px solid ${selectedPalette===palette.name?P:"#E8D9C0"}`, borderRadius:10, padding:"16px", cursor:"pointer", position:"relative", background:selectedPalette===palette.name?"#FDF3E7":"#fff", transition:"border 0.15s" }}>
                    {selectedPalette===palette.name&&<div style={{ position:"absolute", top:12, right:12, width:22, height:22, background:P, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>}
                    <div style={{ display:"flex", gap:8, marginBottom:10 }}>
                      <div style={{ width:30, height:30, borderRadius:"50%", background:palette.pc }}/>
                      <div style={{ width:30, height:30, borderRadius:"50%", background:palette.ac }}/>
                    </div>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:4 }}>{palette.name}</p>
                    <p style={{ fontSize:12, color:"#8A6A4E", marginBottom:10, lineHeight:1.5 }}>{palette.desc}</p>
                    <p style={{ fontSize:11, color:"#B59D7E", margin:0, fontFamily:"monospace" }}>Primary: {palette.p[0]} {palette.p[1]}% {palette.p[2]}%</p>
                    <p style={{ fontSize:11, color:"#B59D7E", margin:0, fontFamily:"monospace" }}>Accent: {palette.a[0]} {palette.a[1]}% {palette.a[2]}%</p>
                  </div>
                ))}
              </div>

              {/* Custom colours */}
              <div style={{ borderTop:"1px solid #f3f4f6", paddingTop:20 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                  <p style={{ fontSize:13, color:"#4A3624", margin:0 }}>Or set custom colours</p>
                  <div style={{ display:"flex", gap:4 }}>
                    {["HSL","HEX"].map(m=><button key={m} onClick={()=>setColourMode(m)} style={{ padding:"5px 14px", borderRadius:6, border:`1.5px solid ${colourMode===m?P:"#E8D9C0"}`, background:colourMode===m?"#fff":"transparent", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:colourMode===m?P:"#8A6A4E" }}>{m}</button>)}
                  </div>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr auto", gap:12, alignItems:"end" }}>
                  <div>
                    <label style={{ fontSize:12, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Primary</label>
                    <input value={customPrimary} onChange={e=>setCustomPrimary(e.target.value)} style={{ ...inputStyle, fontFamily:"monospace", fontSize:13 }}/>
                  </div>
                  <div>
                    <label style={{ fontSize:12, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Accent</label>
                    <input value={customAccent} onChange={e=>setCustomAccent(e.target.value)} style={{ ...inputStyle, fontFamily:"monospace", fontSize:13 }}/>
                  </div>
                  <button style={{ padding:"10px 20px", background:P, color:"#fff", border:"none", borderRadius:8, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap" }}>Apply Custom</button>
                </div>
              </div>
            </div>

            {/* TYPOGRAPHY */}
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)", marginBottom:20 }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
                <div style={{ width:36, height:36, background:"#F2EBDD", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, fontWeight:800, color:"#4A3624" }}>T</div>
                <div>
                  <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:2 }}>Typography</p>
                  <p style={{ fontSize:13, color:"#8A6A4E", margin:0 }}>Change the global font family across the platform</p>
                </div>
              </div>
              <p style={{ fontSize:13, color:"#4A3624", marginBottom:12, fontWeight:500 }}>Select a font</p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:12, marginBottom:20 }}>
                {["Outfit","Inter","DM Sans","Plus Jakarta Sans","Manrope","Space Grotesk","Satoshi"].map(font=>(
                  <div key={font} onClick={()=>setSelectedFont(font)} style={{ border:`2px solid ${selectedFont===font?P:"#E8D9C0"}`, borderRadius:10, padding:"14px 16px", cursor:"pointer", background:selectedFont===font?"#FDF3E7":"#fff" }}>
                    <p style={{ fontSize:14, fontWeight:700, color:"#2E1F12", marginBottom:4 }}>{font}</p>
                    <p style={{ fontSize:13, color:"#8A6A4E", margin:0 }}>Aa Bb Cc 123</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize:13, color:"#4A3624", marginBottom:12, fontWeight:500 }}>Or add a custom Google Font</p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr auto", gap:12, alignItems:"end" }}>
                <div>
                  <label style={{ fontSize:12, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Font Name</label>
                  <input placeholder="Roboto" style={{ ...inputStyle, fontSize:13 }}/>
                </div>
                <div>
                  <label style={{ fontSize:12, fontWeight:600, color:"#4A3624", display:"block", marginBottom:6 }}>Stylesheet URL</label>
                  <input placeholder="https://fonts.googleapis.com/css2?family=Roboto..." style={{ ...inputStyle, fontSize:13 }}/>
                </div>
                <button style={{ padding:"10px 20px", background:P, color:"#fff", border:"none", borderRadius:8, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap" }}>Load Font</button>
              </div>
            </div>

            {/* LOGO & BRAND TEXT */}
            <div style={{ background:"#FDF8ED", borderRadius:12, padding:"24px", boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
                <div style={{ width:36, height:36, background:"#F2EBDD", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A3624" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                <div>
                  <p style={{ fontSize:15, fontWeight:700, color:"#2E1F12", marginBottom:2 }}>Logo &amp; Brand Text</p>
                  <p style={{ fontSize:13, color:"#8A6A4E", margin:0 }}>Adjust logo height and brand text size with live preview</p>
                </div>
              </div>

              {/* Live Preview */}
              <div style={{ border:"1px solid #E8D9C0", borderRadius:10, overflow:"hidden", marginBottom:24 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 14px", background:"#F7EFE0", borderBottom:"1px solid #E8D9C0" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8A6A4E" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  <span style={{ fontSize:11, fontWeight:600, color:"#8A6A4E", letterSpacing:"0.05em" }}>LIVE PREVIEW</span>
                </div>
                <div style={{ padding:"20px" }}>
                  <p style={{ fontSize:12, color:"#B59D7E", marginBottom:8 }}>Marketing Navbar</p>
                  <div style={{ background:P, borderRadius:8, padding:"14px 20px", display:"flex", alignItems:"center", gap:14, marginBottom:16 }}>
                    <div style={{ width:`${logoHeight*14}px`, height:`${logoHeight*14}px`, background:"rgba(255,255,255,0.15)", borderRadius:8, flexShrink:0 }}/>
                    <span style={{ fontSize:`${brandTextSize}rem`, fontWeight:800, color:"#fff" }}>RightKnots</span>
                  </div>
                  <p style={{ fontSize:12, color:"#B59D7E", marginBottom:8 }}>Admin Sidebar</p>
                  <div style={{ display:"flex", justifyContent:"center", padding:"16px", background:"#F7EFE0", borderRadius:8 }}>
                    <div style={{ width:80, height:80, background:P, borderRadius:16, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:4 }}>
                      <div style={{ width:`${logoHeight*12}px`, height:`${logoHeight*12}px`, background:A, borderRadius:8 }}/>
                      <span style={{ fontSize:9, color:"#fff", fontWeight:700, letterSpacing:"0.05em" }}>ADMIN</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24 }}>
                <div>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Logo Height</label>
                    <span style={{ fontSize:13, color:"#8A6A4E" }}>{logoHeight}rem</span>
                  </div>
                  <input type="range" min="1" max="6" step="0.5" value={logoHeight} onChange={e=>setLogoHeight(Number(e.target.value))} style={{ width:"100%", accentColor:P, cursor:"pointer" }}/>
                </div>
                <div>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
                    <label style={{ fontSize:13, fontWeight:600, color:"#4A3624" }}>Brand Text Size</label>
                    <span style={{ fontSize:13, color:"#8A6A4E" }}>{brandTextSize}rem</span>
                  </div>
                  <input type="range" min="0.5" max="3" step="0.25" value={brandTextSize} onChange={e=>setBrandTextSize(Number(e.target.value))} style={{ width:"100%", accentColor:P, cursor:"pointer" }}/>
                </div>
            <button onClick={()=>{
              fetch(`${API}/api/settings/theme`,{method:"PUT",headers:authHeader(),body:JSON.stringify({palette:selectedPalette,font:selectedFont})}).then(r=>r.json()).then(d=>{
                if(d.success) alert("Theme saved successfully!");
                else alert("Failed to save theme");
              }).catch(()=>alert("Error saving theme"));
            }} style={{ marginTop:20, background:P, color:"#fff", border:"none", borderRadius:8, padding:"12px 28px", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>Save Theme</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AUDIT LOG */}
      {activePage==="auditlog"&&(
        <div style={{ marginLeft:240, minHeight:"100vh", background:"#F2EBDD", fontFamily:selectedFont+",'Segoe UI',sans-serif" }} onClick={()=>setUserMenuOpen(false)}>
          <TopBar/>
          <div style={{ padding:"28px" }}>
            <h1 style={{ fontSize:26, fontWeight:800, color:"#2E1F12", marginBottom:4 }}>Audit Log</h1>
            <p style={{ fontSize:14, color:"#8A6A4E", marginBottom:20 }}>System activity and change history</p>
            <div style={{ maxWidth:440, display:"flex", alignItems:"center", background:"#FDF8ED", border:"1.5px solid #E8D9C0", borderRadius:8, padding:"9px 14px", gap:10, marginBottom:16 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B59D7E" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input placeholder="Search..." style={{ border:"none", outline:"none", flex:1, fontSize:14, color:"#2E1F12", fontFamily:"inherit" }}/>
            </div>
            <div style={{ background:"#FDF8ED", borderRadius:12, boxShadow:"0 1px 4px rgba(0,0,0,0.06)", overflow:"hidden" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
                <thead><tr style={{ borderBottom:"1px solid #f3f4f6" }}>{["DATE","ACTOR","ENTITY","ACTION"].map(h=><th key={h} style={{ textAlign:"left", padding:"12px 16px", color:"#8A6A4E", fontWeight:700, fontSize:11, letterSpacing:"0.05em" }}>{h}</th>)}</tr></thead>
                <tbody>
                  {auditLog.length===0?<tr><td colSpan={4}><EmptyState msg="No audit log entries yet."/></td></tr>:auditLog.map(entry=>(
                    <tr key={entry.id} style={{ borderBottom:"1px solid #f9fafb" }}>
                      <td style={{ padding:"12px 16px", color:"#8A6A4E", fontSize:13, whiteSpace:"nowrap" }}>{entry.created_at?new Date(entry.created_at).toLocaleString("en-GB"):"—"}</td>
                      <td style={{ padding:"12px 16px", color:"#2E1F12", fontWeight:600 }}>{entry.user_name||"—"}</td>
                      <td style={{ padding:"12px 16px", color:"#4A3624" }}>{entry.entity||"—"}</td>
                      <td style={{ padding:"12px 16px", color:"#4A3624" }}>{entry.action}{entry.details?` (${entry.details})`:""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {!["dashboard","vessels","fleets","assignments","sessions","reviewqueue","capatracker","analytics","reports","emailtemplates","platformtheme","auditlog","users","settings","profile","questionbank","calibrary","templates","randomness","scoring","aiprofiles","reportprofiles"].includes(activePage)&&(
        <ComingSoon page={(MENU.flatMap(g=>g.items).find(i=>i.id===activePage)||{label:activePage}).label}/>
      )}
    </div>
  );
}