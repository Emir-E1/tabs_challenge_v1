Tab Challenge  Workflow & Reasoning
![Workflow](./workflow.png)
This document explains the logic I designed for dynamically reordering tabs.
Goal
When a user clicks on a tab, that tab should always move to the first position.
Logic
find() is used to retrieve the clicked tab
filter() is used to retrieve all remaining tabs
The new order is then reconstructed as: [clicked, ...others]
Possible Optimization
Use a single reduce() pass instead of calling both find() and filter() to optimize the search phase.
