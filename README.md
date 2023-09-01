# PDF SIMPLE

In a first phase this package will help in the creation of tables in the process of creating a pdf using jspdf.

## Installation

```bash
npm install pdf-simple
```

## Usage

The code below generates a blank pdf file.

```typescript
import { pdfSimple, save } from 'pdf-simple';

const pdf = pdfSimple();

save(pdf, 'example.pdf');
```

## Features

Here are some of the main features offered by pdf-simple

### simpleTable

The simpleTable function serves to generate a very simple table.

```typescript
// Method signature
simpleTable(pdf, x, y, headers, headerheight, dataset, border): void
```

```typescript
// Example
import { pdfSimple, save, simpleTable } from 'pdf-simple';

const pdf = pdfSimple();

simpleTable( pdf, 30, 60, [{ text: 'Nome', width: 60 }], 7, [['Élvio Sadoc da Silva e Sousa']]); // borderless

simpleTable( pdf, 30, 60, [{ text: 'Nome', width: 60 }], 7, [['Élvio Sadoc da Silva e Sousa']], true); // with borde

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
import { pdfSimple, save, stripedTable } from 'pdf-simple';

const pdf = pdfSimple();

stripedTable( pdf, 30, 60, [{ text: 'Nome', width: 60 }], 7, [['Élvio Sadoc da Silva e Sousa']]); // borderless

stripedTable( pdf, 30, 60, [{ text: 'Nome', width: 60 }], 7, [['Élvio Sadoc da Silva e Sousa']], true); // with borde

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
import { pdfSimple, save, spacedTable } from 'pdf-simple';

const pdf = pdfSimple();

spacedTable( pdf, 30, 60, [{ text: 'Nome', width: 60 }], 7, [['Élvio Sadoc da Silva e Sousa']]); // borderless

spacedTable( pdf, 30, 60, [{ text: 'Nome', width: 60 }], 7, [['Élvio Sadoc da Silva e Sousa']], true); // with borde

save(pdf, 'example.pdf'); 
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. [github](https://github.com/ManuelismoXp/pdf-simple)


## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit/) file for details.