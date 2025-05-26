# Charts and Diagrams Demo

This page demonstrates the integration of both Chart.js and Mermaid diagrams in your documentation.

## Chart.js Example

<ChartDemo />

## Mermaid Diagrams Examples

### Flowchart

<MermaidDiagram
  diagram="
    graph TD
      A[Start] --> B{Is it working?}
      B -->|Yes| C[Great!]
      B -->|No| D[Debug]
      D --> B
  "
/>

### Sequence Diagram

<MermaidDiagram
  diagram="
    sequenceDiagram
      participant User
      participant System
      User->>System: Request Data
      System->>System: Process Request
      System-->>User: Return Response
  "
/>

### Class Diagram

<MermaidDiagram
  diagram="
    classDiagram
      class Animal {
        +String name
        +makeSound()
      }
      class Dog {
        +bark()
      }
      class Cat {
        +meow()
      }
      Animal <|-- Dog
      Animal <|-- Cat
  "
/>

## Using the Components

You can use these components anywhere in your documentation like this:

```vue
<!-- For Chart.js -->
<ChartDemo />

<!-- For Mermaid -->
<MermaidDiagram
  diagram="
    graph TD
      A[Start] --> B[End]
  "
/>
```

The components are fully responsive and will work in both light and dark modes. 