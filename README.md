# SIMPLE PDF

In a first phase this package will help in the creation of tables in the process of creating a pdf using jspdf.

## Installation

```bash
npm install simple-pdf
```

## Usage

The code below generates a blank pdf file.

```typescript
import { SimplePDF, save } from 'simple-pdf';

const pdf = SimplePDF();

save(pdf, 'example.pdf');
```

## Features

Here are some of the main features offered by simple-pdf

### simpleTable

The simpleTable function serves to generate a very simple table.

```typescript
// Method signature
simpleTable(pdf, x, y, headers, headerheight, dataset, border): void
```

```typescript
// Example
import { SimplePDF, save, simpleTable } from 'simple-pdf';

const pdf = SimplePDF();

simpleTable( pdf, 30, 60, [{ text: 'Nome', width: 60 }], 7, [['Élvio Sadoc da Silva e Sousa', 'M', 12]]); // borderless

simpleTable( pdf, 30, 60, [{ text: 'Nome', width: 60 }], 7, [['Élvio Sadoc da Silva e Sousa', 'M', 12]], true); // with borde

save(pdf, 'example.pdf'); 
```

### stripedTable

The striped Table function allows you to make a table with the zebra effect.

```typescript
// Method signature
stripedTable(pdf, x, y, headers, headerheight, dataset, border): void
```

```typescript
// Example
import { SimplePDF, save, stripedTable } from 'simple-pdf';

const pdf = SimplePDF();

stripedTable( pdf, 30, 60, [{ text: 'Nome', width: 60 }], 7, [['Élvio Sadoc da Silva e Sousa', 'M', 12]]); // borderless

stripedTable( pdf, 30, 60, [{ text: 'Nome', width: 60 }], 7, [['Élvio Sadoc da Silva e Sousa', 'M', 12]], true); // with borde

save(pdf, 'example.pdf'); 
```

### spacedTable

The spacedTable function allows you to make a table with spacing between rows and columns and with the zebra effect.

```typescript
// Method signature
spacedTable(pdf, x, y, headers, headerheight, dataset, border): void
```

```typescript
// Example
import { SimplePDF, save, spacedTable } from 'simple-pdf';

const pdf = SimplePDF();

spacedTable( pdf, 30, 60, [{ text: 'Nome', width: 60 }], 7, [['Élvio Sadoc da Silva e Sousa', 'M', 12]]); // borderless

spacedTable( pdf, 30, 60, [{ text: 'Nome', width: 60 }], 7, [['Élvio Sadoc da Silva e Sousa', 'M', 12]], true); // with borde

save(pdf, 'example.pdf'); 
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. [github](https://github.com/ManuelismoXp/simple-pdf)


## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit/) file for details.