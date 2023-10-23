import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import "./index.css";
import { usePreview } from "react-dnd-preview";
const MyPreview = () => {
	const preview = usePreview();
	if (!preview.display) {
		return null;
	}
	const { itemType, item, style } = preview;
	return (
		<div className="item-list__item" style={style}>
			{itemType}
		</div>
	);
};
function getBackend() {
	const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	return isMobile ? TouchBackend : HTML5Backend;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<DndProvider backend={getBackend()}>
			<App />
			<MyPreview />
		</DndProvider>
	</React.StrictMode>
);