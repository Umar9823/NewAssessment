import React, { useState } from 'react';
import './AddWidgetPanel.css';

const AddWidgetPanel = ({ categories, onClose, onAddWidget }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const toggleWidgetSelection = (widgetType) => {
    setSelectedWidgets(prevSelected => {
      const newSelection = prevSelected.includes(widgetType)
        ? prevSelected.filter(w => w !== widgetType)
        : [...prevSelected, widgetType];
        
      console.log('Updated selection:', newSelection); // Debug log
      return newSelection;
    });
  };

  const handleAddWidgets = () => {
    selectedWidgets.forEach(widgetType => {
      const newWidget = {
        type: widgetType,
        title: widgetName || widgetType.charAt(0).toUpperCase() + widgetType.slice(1),
        text: widgetText,
      };
      onAddWidget(selectedCategoryIndex, newWidget);
    });
    setWidgetName('');  // Reset input fields
    setWidgetText('');
    setSelectedWidgets([]);
    onClose();
  };

  return (
    <div className="add-widget-panel">
      <div className="panel-header">
        <h5>Add Widget</h5>
        <a onClick={onClose}><i className="fa-solid fa-xmark"></i></a>
      </div>
      <div className="panel-body">
        <div className="category-tabs">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={selectedCategoryIndex === index ? 'active' : ''} 
              onClick={() => setSelectedCategoryIndex(index)}
            >
              {category.title}
            </button>
          ))}
        </div>
        <div className="widget-options">
          {categories[selectedCategoryIndex].widgets
            .filter(widget => widget.data && widget.data.length > 0)  // Filter widgets that have data
            .map((widget, index) => (
            <div key={index} className="widget-checkbox">
              <input 
                type="checkbox" 
                id={`widget-${index}`}
                value={widget.type} 
                checked={selectedWidgets.includes(widget.type)} 
                onChange={() => toggleWidgetSelection(widget.type)} 
              />
              <label htmlFor={`widget-${index}`}>{widget.title}</label>
            </div>
          ))}
        </div>
        <div className="widget-form">
          <label htmlFor="widgetName">Widget Name:</label>
          <input 
            type="text" 
            id="widgetName" 
            value={widgetName} 
            onChange={(e) => setWidgetName(e.target.value)} 
          />
          <label htmlFor="widgetText">Widget Text:</label>
          <textarea 
            id="widgetText" 
            value={widgetText} 
            onChange={(e) => setWidgetText(e.target.value)} 
          />
        </div>
      </div>
      <div className="panel-footer">
        <button className="close-button" onClick={onClose}>Cancel</button>
        <button className="add-button" onClick={handleAddWidgets}>Confirm</button>
      </div>
    </div>
  );
};

export default AddWidgetPanel;
