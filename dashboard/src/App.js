import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Widget from './components/Widget/Widget';
import DonutChart from './components/DonutChart/DonutChart';
import ButtonWidget from './components/ButtonWidget/ButtonWidget';
import StackedBarChart from './components/BulletChart/StackedBarChart';
import AddWidgetPanel from './components/AddWidgetPanel/AddWidgetPanel';
import './App.css';

const App = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/dashboardData.json')
      .then((response) => response.json())
      .then((data) => setDashboardData(data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  const addWidget = (categoryIndex, widget) => {
    setDashboardData(prevData => {
      const updatedCategories = [...prevData.categories];
      updatedCategories[categoryIndex].widgets.push(widget);
      return { ...prevData, categories: updatedCategories };
    });
  };

  const removeWidget = (categoryIndex, widgetIndex) => {
    setDashboardData(prevData => {
      const updatedCategories = [...prevData.categories];
      updatedCategories[categoryIndex].widgets.splice(widgetIndex, 1);
      return { ...prevData, categories: updatedCategories };
    });
  };

  const renderWidget = (widget, categoryIndex, widgetIndex) => {
    const WidgetComponent = () => {
      switch (widget.type) {
        case 'pie':
          return <DonutChart data={widget.data} />;
        case 'bullet':
          return <StackedBarChart data={widget.data} />;
        case 'text':
          return <p>{widget.data}</p>;
        case 'button':
          return <ButtonWidget data={widget.data} onOpenPanel={() => setIsPanelOpen(true)} />;
        default:
          return <p>Random text for assignment purposes.</p>;
      }
    };

    return (
      <Widget
        key={widgetIndex}
        title={widget.title}
        onRemove={() => removeWidget(categoryIndex, widgetIndex)}
      >
        <WidgetComponent />
      </Widget>
    );
  };

  if (!dashboardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="main-content">
        <div className="dashboard">
          <div className="header-container">
            <h2 className="main-heading">{dashboardData.mainHeading}</h2>
            <div className="header-buttons">
              <button className="header-button" onClick={() => setIsPanelOpen(true)}>
                <i className="fa fa-plus"></i> Add Widget
              </button>
              <button className="header-button">
                <i className="fa fa-sync"></i>
              </button>
              <button className="header-button">
                <i className="fa fa-ellipsis"></i>
              </button>
              <button className="header-button" id='filter-btn'>
                <i className="fa fa-clock" id='clock'></i> Last 2 Days <i className="fa fa-caret-down"></i>
              </button>
            </div>
          </div>

          {dashboardData.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="category-section">
              <h4 className="category-title">{category.title}</h4>
              <div className="category">
                <div className="widgets-container">
                  {category.widgets
                    .filter(widget => 
                      (widget.title && widget.title.toLowerCase().includes(searchQuery.toLowerCase())) || widget.type === 'button'
                    )
                    .map((widget, widgetIndex) => 
                      renderWidget(widget, categoryIndex, widgetIndex)
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isPanelOpen && (
        <AddWidgetPanel
          categories={dashboardData.categories}
          onClose={() => setIsPanelOpen(false)}
          onAddWidget={addWidget}
        />
      )}
    </div>
  );
};

export default App;
