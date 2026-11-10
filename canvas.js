class DrawingStudio {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.isDrawing = false;
    this.brushColor = '#e2e8f0';
    this.brushSize = 4;
    this.isEraser = false;
    this.history = [];

    this.initCanvas();
    this.bindEvents();
  }

  initCanvas() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = Math.max(500, rect.width || 600);
    this.canvas.height = 550;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.fillBackground();
    this.saveState();
  }

  fillBackground() {
    this.ctx.fillStyle = '#181b20';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  bindEvents() {
    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;
      if (e.touches && e.touches[0]) {
        return {
          x: (e.touches[0].clientX - rect.left) * scaleX,
          y: (e.touches[0].clientY - rect.top) * scaleY
        };
      }
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    };

    const startDraw = (e) => {
      e.preventDefault();
      this.isDrawing = true;
      const pos = getPos(e);
      this.ctx.beginPath();
      this.ctx.moveTo(pos.x, pos.y);
    };

    const draw = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const pos = getPos(e);
      this.ctx.strokeStyle = this.isEraser ? '#181b20' : this.brushColor;
      this.ctx.lineWidth = this.brushSize;
      this.ctx.lineTo(pos.x, pos.y);
      this.ctx.stroke();
    };

    const stopDraw = () => {
      if (this.isDrawing) {
        this.isDrawing = false;
        this.ctx.closePath();
        this.saveState();
      }
    };

    this.canvas.addEventListener('mousedown', startDraw);
    this.canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDraw);

    this.canvas.addEventListener('touchstart', startDraw, { passive: false });
    this.canvas.addEventListener('touchmove', draw, { passive: false });
    window.addEventListener('touchend', stopDraw);
  }

  setColor(color) {
    this.brushColor = color;
    this.isEraser = false;
  }

  setSize(size) {
    this.brushSize = parseInt(size, 10);
  }

  setEraser(active) {
    this.isEraser = active;
  }

  clear() {
    this.fillBackground();
    this.saveState();
  }

  saveState() {
    if (this.history.length > 20) this.history.shift();
    this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
  }

  undo() {
    if (this.history.length > 1) {
      this.history.pop();
      const prev = this.history[this.history.length - 1];
      this.ctx.putImageData(prev, 0, 0);
    }
  }

  exportPNG() {
    const link = document.createElement('a');
    link.download = `croquis-croisee-des-arts-${Date.now()}.png`;
    link.href = this.canvas.toDataURL('image/png');
    link.click();
  }
}
