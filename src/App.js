import { CssModules } from "./components/CssModules";
import { Emotions } from "./components/Emotion";
import { InlineStyle } from "./components/inlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/styledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotions />
    </div>
  );
}
