# Imagens demonstrativas da Varelle

Criadas com a ferramenta integrada ImageGen, depois convertidas para WebP com Sharp (qualidade 85). São estudos conceituais do mesmo ambiente, não fotografias de imóveis ou projetos de clientes. Não houve uso do fallback CLI.

| Arquivo final                          | Conteúdo                                                     |
| -------------------------------------- | ------------------------------------------------------------ |
| `public/images/living-after.webp`      | Sala decorada, imagem base                                   |
| `public/images/living-before.webp`     | Mesmo ambiente vazio                                         |
| `public/images/renovation-before.webp` | Mesmo ambiente com acabamentos antigos                       |
| `public/images/light-before.webp`      | Mesmo ambiente com exposição e balanço de branco inadequados |

## Fotografias fornecidas pelo cliente

As imagens abaixo foram recebidas para compor o carrossel do hero e convertidas para WebP, sem alterações visuais:

| Arquivo final                           | Uso no site                  |
| --------------------------------------- | ---------------------------- |
| `public/images/hero-interior-warm.webp` | Segunda imagem do carrossel  |
| `public/images/hero-interior-teal.webp` | Terceira imagem do carrossel |

## Prompts utilizados

### Sala decorada

Use case: photorealistic-natural. Create a photoreal architectural editorial photograph for a sophisticated Brazilian real estate visual studio website. Wide landscape 1536x1024. A beautiful contemporary living room, warm ivory plaster walls, tall floor to ceiling windows on the left overlooking green trees, oak floor, soft cream boucle sofa centered right, a low travertine coffee table, an olive green lounge chair, a large abstract earth toned painting, minimal ceramic vase with branches. Refined warm natural sunlight with long subtle shadows, quiet luxury, realistic textures, magazine photography, restrained beige, walnut and olive palette. Camera straight-on at eye level 24mm, show full room and floor, no people, no text, no logos. This will later be edited to remove furniture for an aligned before/after comparison.

### Sala vazia

Use case: precise-object-edit. Edit this architectural photograph into an EMPTY UNFURNISHED BEFORE view for a registered before/after slider. Remove the sofa, chair, all tables, rug, vases, plants indoors, painting and floor lamp; keep only the bare room. Preserve EXACT camera, perspective, crop, dimensions, wall geometry, windows, fireplace, wood panels, oak floor, outdoor trees and sunlight positions. Fill removed objects with coherent bare floor and blank plaster wall. No text, no people. Same room, same natural light, just empty.

### Antes da reforma

Use case: precise-object-edit. Edit this photo into the BEFORE renovation image, for a renovation before-after slider. Preserve EXACT same camera, crop, image dimensions, perspective, window placement, room geometry and fireplace position. Remove all furniture, accessories, rug, painting, lamp, plants inside. Change the oak floor to an old dark brown ceramic tile floor with pale grout, change plaster walls to faded pale yellow slightly worn paint, change fireplace wood wall cladding to dated dark brown timber, no structural changes. Realistic dated empty apartment ready for renovation, clean and plausible, no demolition rubble, no text.

### Antes do aprimoramento

Use case: lighting-weather. Edit this photograph as a deliberately poor unprocessed BEFORE real estate photograph to demonstrate photo enhancement. Preserve absolutely all objects, furniture, architecture, crop, dimensions, camera and perspective exactly in place. Only make the photo underexposed, cooler white balance, dull flatter contrast, muted less vibrant colors. Still visible and realistic, not black. No other changes. No text.
